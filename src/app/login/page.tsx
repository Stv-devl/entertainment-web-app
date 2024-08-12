'use client';

import React from 'react';
import useLogin from '../../hook/auth/useLogin';
import Input from '@/component/form/input/Input';
import Image from 'next/image';
import Link from 'next/link';

/**
 * The Login component renders a login form where users can enter their email and password to access their account.
 * The form includes validation for both fields and displays an error message if the login credentials are incorrect.
 * Upon form submission, the user data is processed by the `useLogin` hook, which handles authentication.
 * If the user does not have an account, they are provided with a link to navigate to the sign-up page.
 * @returns {JSX.Element} The Login form component.
 */

const Login = (): JSX.Element => {
  const { handleSubmit, handleChange, formData, loginErrors } = useLogin();

  return (
    <section className="flex flex-col items-center gap-[83px] min-h-screen">
      <Image
        className="w-auto h-auto mt-[5%] "
        src="/assets/logo.svg"
        alt="logo title"
        width={33}
        height={27}
        priority
      />
      <div className="flex flex-col justify-center items-start gap-[40px] px-[32px] py-[32px] mx-[5%]  w-full max-w-[400px] bg-[#161D2F]  rounded-[15px] ">
        <h1 className="text-3xl">Login</h1>
        <form
          className="flex flex-col gap-[20px] w-full"
          onSubmit={handleSubmit}
        >
          <div className="input-wrapper">
            <Input
              name="email"
              placeholder="Email"
              type="text"
              handleChange={handleChange}
              value={formData.email}
              error={loginErrors ? `loginerror` : ''}
              autoComplete={'email'}
            />
          </div>
          <div className="input-wrapper">
            <Input
              name="password"
              placeholder="password"
              type="password"
              handleChange={handleChange}
              value={formData.password}
              error={loginErrors ? `loginerror` : ''}
              autoComplete={'current-password'}
            />
          </div>
          <span className="form-error text-[#FC4747] ">
            {loginErrors &&
              `We don&apos;t find your information in our database`}
          </span>
          <button
            type="submit"
            className="bg-[#FC4747] duration-500 ease-in-out hover:bg-slate-50 hover:text-black text-base w-full h-[48px] rounded-lg"
          >
            Login to your account
          </button>
          <p className="text-base px-[5%] sm:px-[10%]">
            Don&apos;t have an account?{' '}
            <Link href="/signup">
              <span className="text-[#FC4747] text-base ml-[5px]">Sign up</span>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
