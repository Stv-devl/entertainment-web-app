'use client';

import React from 'react';
import useLogin from '../../hook/auth/useLogin';
import Input from '@/component/form/input/Input';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Login component
 * Display a form for user authentication. It allows the user to write their username and password, and checkbox for remember they are login.
 * On successful login, the user is redirected to the dashboard.
 * @returns - The Login component with a sign-in form.
 */

const Login = () => {
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
            />
          </div>
          <span className="form-error text-[#FC4747] ">
            {loginErrors && `We dont find your informations in our database`}
          </span>
          <button
            type="submit"
            className="bg-[#FC4747] duration-500 ease-in-out hover:bg-slate-50 hover:text-black text-base w-full h-[48px] rounded-lg"
          >
            Login to your account
          </button>
          <p className="text-base px-[5%] sm:px-[10%]">
            Don't have an account?{' '}
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
