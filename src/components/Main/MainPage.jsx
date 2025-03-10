import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; 

import screenshot1 from './images/3d.png'
import screenshot2 from './images/real.png'

import { Button } from '@mui/material';

const MainPage = () => {
  return (
    <div className="containerr">
      <header className="headerr">
      
      
      <div className="absolute top-4 right-4 flex gap-2">
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
        </Link>
        <Link to="/signup">
          <button className="border border-black px-4 py-2 rounded-lg">Sign up</button>
        </Link>
      </div>
  
      </header>

      <main className="main-content">
        <h1 className="titlee">Which method would you prefer for taking the measurements?</h1>
        <div className="optionss">
          <div className="option-cardd">
            <img
              src={screenshot1}
              alt="3D Body Model"
              className="option-imagee"
            />

            <a href='../Avatar/male.html' className="option-buttonn">3D Body Model</a>

          </div>

          <div className="option-cardd">
            <img
              src={screenshot2} 
              alt="Photo of a Real Body"
              className="option-imagee"
            />
            <Link to="/real">
            <button className="option-buttonn">Photo of a Real Body</button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>
          By using VFR, you agree to our <a href="/terms">Terms</a> and have read our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </footer>
    </div>
  );
};

export default MainPage;