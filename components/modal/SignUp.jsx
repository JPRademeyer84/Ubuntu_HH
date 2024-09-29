"use client"; // Add this line at the top

import { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import Social from "../social/Social";
import { showToast } from '../Toast/Toast';

const SignUp = ({ closeModal,openModel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        showToast(result.message)
        closeModal();
        openModel();
      } else {
        setErrorMessage(result.error || 'An error occurred');
      }
    } catch (error) {
      setErrorMessage('Failed to sign up');
    }
  };

  return (
    <div
      className="modal fade show"
      id="signupModal"
      tabIndex="2"
      role="dialog"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div className="account-form-area">
              <button
                type="button"
                className="close-btn"
                onClick={closeModal}
              >
                <i className="las la-times"></i>
              </button>
              <h3 className="title">Open Free Account</h3>
              <div className="account-form-wrapper">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      Email <sup>*</sup>
                    </label>
                    <input
                      type="email"
                      name="signup_name"
                      id="signup_name"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Password <sup>*</sup>
                    </label>
                    <input
                      type="password"
                      name="signup_pass"
                      id="signup_pass"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Confirm Password <sup>*</sup>
                    </label>
                    <input
                      type="password"
                      name="signup_re-pass"
                      id="signup_re-pass"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  {errorMessage && <p className="text-center text-danger">{errorMessage}</p>}
                  <div className="form-group text-center mt-5">
                    <button className="cmn-btn">Sign Up</button>
                  </div>
                </form>
                <p className="text-center mt-4">
                  {" "}
                  Already have an account?{" "}
                  <a
                    href="#0"
                    onClick={openModel}
                  >
                    Login
                  </a>
                </p>
                <div className="divider">
                  <span>or</span>
                </div>

                <Social
                  items={[
                    [FaFacebookF, "/"],
                    [FaTwitter, "/"],
                    [FaGooglePlusG, "/"],
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;