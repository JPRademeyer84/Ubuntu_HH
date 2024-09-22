"use client";

import React, { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import Social from "../social/Social";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed. Please try again.');
      } else {
        console.log('Login successful:', data);
        // Redirect or perform post-login action
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="modal fade" id="loginModal" tabIndex={1} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div className="account-form-area">
              <button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">
                <i className="las la-times"></i>
              </button>
              <h3 className="title">Welcome Back</h3>
              <div className="account-form-wrapper">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email <sup>*</sup></label>
                    <input
                      type="email"
                      name="login_name"
                      id="login_name"
                      placeholder="Enter your Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password <sup>*</sup></label>
                    <input
                      type="password"
                      name="login_pass"
                      id="login_pass"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex flex-wrap justify-content-between mt-2">
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        name="id-1"
                        id="id-1"
                        defaultChecked
                        required
                      />
                      <label htmlFor="id-1">Remember Password</label>
                      <span className="checkbox"></span>
                    </div>
                    <a href="#0" className="link">Forgot Password?</a>
                  </div>
                  {error && <p className="text-center text-danger">{error}</p>}
                  <div className="form-group text-center mt-5">
                    <button type="submit" className="cmn-btn">Log In</button>
                  </div>
                </form>
                <p className="text-center mt-4">
                  Don&#39;t have an account?{' '}
                  <a href="#0" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up Now</a>
                </p>
                <div className="divider">
                  <span>or</span>
                </div>
                <Social items={[[FaFacebookF, "/"], [FaTwitter, "/"], [FaGooglePlusG, "/"]]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
