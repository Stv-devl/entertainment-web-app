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

  const borderClass = error
    ? 'border-[#FC4747] focus:border-[#FC4747]'
    : name === 'search'
    ? value.length > 0
      ? 'focus:border-custom-border-color'
      : 'border-none'
    : 'border-custom-border-color focus:border-white';

  return (
    <>
      <input
        className={`w-full border-b ${borderClass}   
          ${
            name === 'search'
              ? 'bg-[#10141E] text-base sm:text-2xl placeholder:text-base sm:placeholder:text-2xl'
              : 'bg-[#161D2F] placeholder:text-base'
          }  
          focus:outline-none placeholder:text-gray-5m00 sm:pl-[10px] pl-[5px] h-[36px]`}
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
