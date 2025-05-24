import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main/MainPage.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import ImageUploadPage from './components/Real/ImageUploadPage.jsx';
import TermsPage from './components/Terms and Privacy/TermsPage.jsx';
import PrivacyPolicyPage from './components/Terms and Privacy/PrivacyPolicyPage.jsx';
// import { function1 } from './components/Avatar/models/skinned/UCS/basis.js';
// import { function2 } from './components/Avatar/models/skinned/UCS/child.js';
// import { function3 } from './components/Avatar/models/skinned/UCS/female.js';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/real" element={<ImageUploadPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

      </Routes>
    </Router>
  );
};


export default App;
