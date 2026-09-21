import type { MouseEventHandler } from "react";
import "./SubmitButton.scss";

type SubmitButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label?: string;
};

function SubmitButton({ onClick, label = "Submit" }: SubmitButtonProps) {
  return (
    <button type="submit" className="submit-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default SubmitButton;
