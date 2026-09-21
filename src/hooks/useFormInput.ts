import { useState, type ChangeEvent } from "react";
import type { ValidationError } from "../types/validation";

const emptyError: ValidationError = { isError: false, errorMessage: "" };

export function useFormInput(initialValue: string, required: boolean) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<ValidationError>(emptyError);

  function handleInputChangeEvent(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setValue(e.target.value);
    if (error.isError) setError(emptyError);
  }

  function validateInput(val: string): boolean {
    if (required && !val.trim()) {
      setError({ isError: true, errorMessage: "Pflichtfeld" });
      return false;
    }
    setError(emptyError);
    return true;
  }

  return { value, setValue, error, handleInputChangeEvent, validateInput };
}
