'use client';
import useLogin from '@/hook/auth/useLogin';
import { ChangeEvent } from 'react';

export interface InputProps {
  name: string;
  type: string;
  handleChange: (value: { [key: string]: string }) => void;
  value: string;
  placeholder?: string;
  error?: string;
  errors?: boolean;
}

/**
 * Input component
 * Renders an input with a label and an optional error message.
 * @param props - The props object for the Input component.
 * @returns The input component.
 */

const Input: React.FC<InputProps> = ({
  name,
  type,
  handleChange,
  value,
  placeholder,
  error,
  errors,
}: InputProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange({ [name]: e.target.value });
  };

  return (
    <>
      <input
        className={`w-full bg-[#161D2F] border-b ${
          errors
            ? 'border-[#FC4747] focus:border-[#FC4747]'
            : 'border-custom-border-color focus:border-white'
        } focus:outline-none placeholder:text-gray-500 placeholder:font-normal pl-[10px] h-[36px]`}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className="error-message ">{error}</span>}
    </>
  );
};

export default Input;
