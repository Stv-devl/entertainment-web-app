'use client';

import React from 'react';
import useSignUp from '../../hook/auth/useSignUp';

const SignUp: React.FC = () => {
  const {
    handleSubmit,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
  } = useSignUp();

  return (
    <main className="main bg-dark">
      <section className="sign-up-content">
        <i className="fa fa-user-circle sign-up-icon"></i>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="sign-up-button">
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
