import type { ChangeEventHandler } from "react";
import "./TextInput.scss";
import type { ValidationError } from "../../types/validation";

type TextInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: ValidationError;
};

function TextInput({ value, onChange, error }: TextInputProps) {
  function displayError() {
    console.log("Error:", error);
    if (error.isError) {
      return <span className="input-error">{error.errorMessage}</span>;
    }
  }

  return (
    <>
      <input
        type="text"
        className="input-text"
        value={value}
        onChange={onChange}
      />
      {displayError()}
    </>
  );
}

export default TextInput;
