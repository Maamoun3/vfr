import React, { useState } from "react";

const ImageUploadPage = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [sideImage, setSideImage] = useState(null);

  const handleFileChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen bg-white p-4 relative">
      {/* Login & Sign Up Buttons */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
        <button className="border border-black px-4 py-2 rounded-lg">Sign up</button>
      </div>

      {/* Note Section */}
      <p className="text-center font-semibold mt-12 text-lg">
        <strong>Note:</strong> Please ensure the two images are full-body and clear. <br />
        It's also preferable to wear minimal clothing for accuracy.
      </p>

      {/* Image Upload Section */}
      <div className="flex gap-20 mt-20">
        {/* Front Image Upload */}
        <div className="border-2 border-gray-400 p-4 rounded-lg w-80 h-80 flex flex-col items-center justify-center text-center hover:border-blue-400">
          <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
            {frontImage ? (
              <img src={frontImage} alt="Front Profile" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <>
                <div className="text-6xl">⬆</div>
                <p className="mt-2 text-sm">Upload a front-facing image of a person</p>
              </>
            )}
            <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, setFrontImage)} />
          </label>
        </div>
        
        {/* Side Image Upload */}
        <div className="border-2 border-gray-400 p-4 rounded-lg w-80 h-80 flex flex-col items-center justify-center text-center hover:border-blue-400">
          <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
            {sideImage ? (
              <img src={sideImage} alt="Side Profile" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <>
                <div className="text-6xl">⬆</div>
                <p className="mt-2 text-sm">Upload a side-profile image of a person</p>
              </>
            )}
            <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, setSideImage)} />
          </label>
        </div>
      </div>

      {/* Back Button */}
      <button className="bg-gray-300 text-black px-10 py-3 rounded-lg mt-20">Back</button>

      {/* Vertical Text */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-5xl font-bold rotate-90">
        <span className="text-blue-500">T</span>AKING
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-5xl font-bold rotate-90">
        PICTURE
      </div>
    </div>
  );
};

export default ImageUploadPage;