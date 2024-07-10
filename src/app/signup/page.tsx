'use client';

import React from 'react';
import useSignUp from '../../hook/auth/useSignUp';
import Input from '../../component/form/input/Input';

/**
 * Login component
 * Display a form for user authentication. It allows the user to write their username and password, and checkbox for remember they are login.
 * On successful login, the user is redirected to the dashboard.
 * @returns {JSX.Element} - The Login component with a sign-in form.
 */

const SignUp = (): JSX.Element => {
  const { handleSubmit, handleChange, formData, errors } = useSignUp();

  return (
    <section className="pl-[156px] mt-[2%]">
      <i className="fa fa-user-circle sign-up-icon"></i>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <Input
            name="username"
            labelText="Username"
            type="text"
            handleChange={handleChange}
            value={formData.username}
            error={errors.username}
          />
        </div>
        <div className="input-wrapper">
          <Input
            name="email"
            labelText="Email"
            type="email"
            handleChange={handleChange}
            value={formData.email}
            error={errors.email}
          />
        </div>
        <div className="input-wrapper">
          <Input
            name="password"
            labelText="Password"
            type="password"
            handleChange={handleChange}
            value={formData.password}
            error={errors.password}
          />
        </div>
        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignUp;
