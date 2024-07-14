'use client';
import { InputProps } from '@/types/types';
import { ChangeEvent } from 'react';

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
}: InputProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange({ [name]: e.target.value });
  };

  return (
    <>
      <input
        className={`w-full bg-[#161D2F] border-b ${
          error
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
      {error && error !== 'loginerror' && (
        <span className="text-[#FC4747]">{error}</span>
      )}
    </>
  );
};

export default Input;
