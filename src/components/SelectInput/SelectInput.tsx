import type { ChangeEventHandler } from "react";
import type { ValidationError } from "../../types/validation";

type SelectInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  error: ValidationError;
};

function SelectInput({ value, onChange, options, error }: SelectInputProps) {
  function displayError() {
    console.log("Error:", error);
    if (error.isError) {
      return <span className="input-error">{error.errorMessage}</span>;
    }
  }

  return (
    <>
      <select className="input-text" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {displayError()}
    </>
  );
}

export default SelectInput;
