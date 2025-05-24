import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';

const ImageUploadPage = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [sideImage, setSideImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const frontInputRef = useRef(null);
  const sideInputRef = useRef(null);
  const [frontFile, setFrontFile] = useState(null);
  const [sideFile, setSideFile] = useState(null);

  const handleFileChange = (event, setImage, setFile) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
      setError('Please upload a valid image file (JPEG, PNG)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }

    setError(null);
    setImage(URL.createObjectURL(file));
    setFile(file);
  };

  const handleSubmit = async () => {
    if (!frontFile || !sideFile) {
      setError("Please upload both person and clothes images.");
      return;
    }

    const formData = new FormData();
    formData.append("person_image", frontFile);
    formData.append("clothes_image", sideFile);

    setIsLoading(true);
    setError(null);
    setResultImage(null);

    try {
      const filename = "000001_0.jpg";
      const response = await fetch('http://localhost:5000/api/tryon?filename=${frontFile.name.split(".")[0]}', {
        method: "POST",
        body: formData,
    });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Try-on failed. Please try again.");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setResultImage(imageUrl);
    } catch (error) {
      console.error("Try-on error:", error);
      setError(error.message || "Try-on failed. Please check the backend and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetUpload = (type) => {
    if (type === 'person') {
      setFrontImage(null);
      setFrontFile(null);
      if (frontInputRef.current) frontInputRef.current.value = '';
    } else {
      setSideImage(null);
      setSideFile(null);
      if (sideInputRef.current) sideInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white p-4 relative">
      <div className="absolute top-4 right-4 flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Login</button>
        <button className="border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition">Sign up</button>
      </div>

      <div className="text-center mt-12 max-w-2xl px-4">
        <h1 className="text-2xl font-bold mb-2">Virtual Try-On</h1>
        <p className="text-gray-700">
          <strong>Note:</strong> For best results, please upload clear full-body images.
          Wear minimal clothing (e.g., plain t-shirt) for more accurate virtual fitting.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-12 w-full max-w-4xl px-4">
        <div className="flex-1">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-80 flex flex-col items-center justify-center transition hover:border-blue-400 relative">
            {frontImage ? (
              <>
                <img src={frontImage} alt="Person" className="w-full h-full object-contain rounded-lg" />
                <button onClick={() => resetUpload('person')} className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600">×</button>
              </>
            ) : (
              <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
                <div className="text-6xl text-gray-400 mb-4">⬆</div>
                <p className="text-gray-600 text-center">Upload a front-facing<br />full-body image</p>
                <p className="text-gray-400 text-sm mt-2">(JPEG or PNG, max 5MB)</p>
                <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, setFrontImage, setFrontFile)} ref={frontInputRef} />
              </label>
            )}
          </div>
          <p className="text-center mt-2 text-gray-600">Person Image</p>
        </div>

        <div className="flex-1">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-80 flex flex-col items-center justify-center transition hover:border-blue-400 relative">
            {sideImage ? (
            <>
                <img src={sideImage} alt="Clothing" className="w-full h-full object-contain rounded-lg" />
                <button onClick={() => resetUpload('clothing')} className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600">×</button>
              </>
            ) : (
              <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
                <div className="text-6xl text-gray-400 mb-4">⬆</div>
                <p className="text-gray-600 text-center">Upload a clothing item<br />(top/t-shirt)</p>
                <p className="text-gray-400 text-sm mt-2">(JPEG or PNG, max 5MB)</p>
                <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, setSideImage, setSideFile)} ref={sideInputRef} />
              </label>
            )}
          </div>
          <p className="text-center mt-2 text-gray-600">Clothing Image</p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 gap-4">
        <button
          onClick={handleSubmit}
          disabled={isLoading || !frontImage || !sideImage}
          className={`bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition min-w-40 ${
            isLoading || !frontImage || !sideImage ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? "Processing..." : "Try On"}
        </button>
        <Link to="/" className="text-gray-600 hover:text-gray-800">Back to Home</Link>
      </div>

      {error && <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg max-w-md text-center">{error}</div>}

      {resultImage && (
        <div className="mt-12 w-full max-w-2xl px-4">
          <h2 className="text-xl font-bold mb-4 text-center">Your Virtual Try-On Result</h2>
          <div className="border-2 border-gray-200 rounded-lg p-4 flex justify-center">
            <img src={resultImage} alt="Try-on result" className="max-w-full max-h-96 object-contain rounded-lg shadow-md" />
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = resultImage;
                link.download = 'virtual-tryon-result.png';
                link.click();
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Download Result
            </button>
          </div>
        </div>
      )}

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl font-bold rotate-90 hidden md:block">
        <span className="text-blue-500">T</span>RY
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl font-bold rotate-90 hidden md:block">
        <span className="text-blue-500">O</span>N
      </div>
    </div>
  );
};

export default ImageUploadPage;
