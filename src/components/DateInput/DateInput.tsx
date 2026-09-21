import type { ChangeEventHandler } from "react";
import type { ValidationError } from "../../types/validation";

type DateInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: ValidationError;
};

function DateInput({ value, onChange, error }: DateInputProps) {
  function displayError() {
    if (error.isError) {
      return <span className="input-error">{error.errorMessage}</span>;
    }
  }

  return (
    <>
      <input
        type="date"
        className="input-text"
        value={value}
        onChange={onChange}
      />
      {displayError()}
    </>
  );
}

export default DateInput;
