'use client';

import React from 'react';
import useLogin from '../../hook/auth/useLogin';
import Input from '@/component/form/input/Input';

/**
 * Login component
 * Display a form for user authentication. It allows the user to write their username and password, and checkbox for remember they are login.
 * On successful login, the user is redirected to the dashboard.
 * @returns {JSX.Element} - The Login component with a sign-in form.
 */

const Login = (): JSX.Element => {
  const { handleSubmit, handleChange, formData, error } = useLogin();

  return (
    <section className="pl-[156px] mt-[2%]">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <Input
            name="email"
            labelText="Email"
            type="text"
            handleChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="input-wrapper">
          <Input
            name="password"
            labelText="password"
            type="password"
            handleChange={handleChange}
            value={formData.password}
          />
        </div>
        <span className="form-error">
          {error && 'Please write a good email and password'}
        </span>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default Login;
