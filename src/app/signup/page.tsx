'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useSignUp from '../../hook/auth/useSignUp';
import Input from '../../component/form/input/Input';

/**
 * Login component
 * Display a form for user authentication. It allows the user to write their username and password, and checkbox for remember they are login.
 * On successful login, the user is redirected to the dashboard.
 * @returns {JSX.Element} - The Login component with a sign-in form.
 */

const SignUp = (): JSX.Element => {
  const { handleSubmit, handleChange, formData, signupErrors } = useSignUp();

  return (
    <section className="flex flex-col items-center gap-[83px] min-h-screen">
      <Image
        className="mt-[5%]"
        src="/assets/logo.svg"
        alt="logo title"
        width={32}
        height={25.6}
        priority
      />
      <div className="flex flex-col justify-center items-start gap-[40px] px-[32px] py-[32px] mx-[5%] w-full max-w-[400px] bg-[#161D2F] rounded-[15px] ">
        <h1 className="text-[32px]">Sign Up</h1>
        <form
          className="flex flex-col gap-[20px] w-full"
          onSubmit={handleSubmit}
        >
          <div className="input-wrapper">
            <Input
              name="username"
              placeholder="Username"
              type="text"
              handleChange={handleChange}
              value={formData.username}
              error={signupErrors.username}
            />
          </div>
          <div className="input-wrapper">
            <Input
              name="email"
              placeholder="Email"
              type="email"
              handleChange={handleChange}
              value={formData.email}
              error={signupErrors.email}
            />
          </div>
          <div className="input-wrapper">
            <Input
              name="password"
              placeholder="Password"
              type="password"
              handleChange={handleChange}
              value={formData.password}
              error={signupErrors.password}
            />
          </div>
          <div className="input-wrapper">
            <Input
              name="repeat"
              placeholder="Repeat password"
              type="password"
              handleChange={handleChange}
              value={formData.repeat}
              error={signupErrors.repeat}
            />
          </div>

          <button
            type="submit"
            className="bg-[#FC4747] duration-500 ease-in-out hover:bg-slate-50 hover:text-black font-normal w-full h-[48px] rounded-lg"
          >
            Sign Up
          </button>
          <p className="font-normal px-[16%]">
            Already have an account?{' '}
            <Link href="/login">
              <span className="text-[#FC4747] font-normal ml-[10px]">
                Login
              </span>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
