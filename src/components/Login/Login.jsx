import React, { useState } from "react";
import "./Login.css";

import googlelogo from './images/google.png'

const LoginPage = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:3000/auth/google"; // Backend URL for Google OAuth
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true); // Show forgot password form
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false); // Go back to login form
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("A password reset link has been sent to your email.");
        setIsForgotPassword(false); // Go back to login form after submission
      } else {
        alert("Error: Unable to send reset link.");
      }
    } catch (error) {
      console.error("Error sending reset link:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome Back</h1>
        <p>Please enter your details to continue.</p>

        {isForgotPassword ? (
          <div>
            <h2>Reset Your Password</h2>
            <form onSubmit={handleForgotPasswordSubmit}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button type="submit" className="login-button">
                Send Reset Link
              </button>
            </form>
            <p onClick={handleBackToLogin} className="back-to-login">
              Back to login
            </p>
          </div>
        ) : (
          <form>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            {/* <div className="options"> */}
              {/* <div>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember for 30 days</label>
              </div>
              <a href="#" className="forgot-password" onClick={handleForgotPasswordClick}>
                Forgot password?
              </a>
            </div> */}
            <button type="submit" className="login-button">
              Sign In
            </button>
            <div className="divider">
              <span>or</span>
            </div>
          </form>
        )}

        {!isForgotPassword && (
          <button onClick={handleGoogleSignIn} className="google-signin">
            <img
              src={googlelogo}
              alt="Google Logo"
              className="google-logo"
            />
            Sign in with Google
          </button>
        )}

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      {/* <div className="login-illustration">
        <img
          src="/images/logo.png"
          alt="Virtual Fitting Room Illustration"
          className="illustration-image"
        />
      </div> */}
    </div>
  );
};

export default LoginPage;