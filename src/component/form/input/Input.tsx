import { ChangeEvent } from 'react';

export interface InputProps {
  name: string;
  labelText: string;
  type: string;
  handleChange: (updates: { [key: string]: string }) => void;
  value: string;
  error?: string;
}

/**
 * Input component
 * Renders an input with a label and an optional error message.
 * @param props - The props object for the Input component.
 * @returns The input component.
 */

const Input: React.FC<InputProps> = ({
  name,
  labelText,
  type,
  handleChange,
  value,
  error,
}: InputProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange({ [name]: e.target.value });
  };

  return (
    <div className="input-wrapper">
      <label className="label" htmlFor={name}>
        {labelText}
      </label>
      <input
        className="form-input"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {/*} {error && <span className="error-message">{error}</span>}*/}
    </div>
  );
};

export default Input;
