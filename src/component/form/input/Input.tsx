/**
 * Input component
 * Renders an input with a label and an optional error message.
 * @param {string} name - The name of the input.
 * @param {string} labelText - The label text of the the input .
 * @param {function} handleChange - The function to handle changes the input.
 * @param {string} value - The current value of the input.
 * @param {string} [error] - An optional error message to display if there is an error.
 * @returns {JSX.Element} - The input component.
 */

const Input = (
  {
    /*name, labelText, handleChange, value, error*/
  }
) => {
  return {
    /*}
    <div className="input-wrapper">
      <label className="label" htmlFor={name}>
        {labelText}
      </label>
      <input
        className="form-input"
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(e) => handleChange({ [name]: e.target.value })}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
    */
  };
};

export default Input;
