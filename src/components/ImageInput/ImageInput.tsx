import { useRef, type ChangeEvent } from "react";
import "./ImageInput.scss";

type ImageInputProps = {
  value: string;
  onChange: (dataUrl: string) => void;
};

function ImageInput({ value, onChange }: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="image-input">
      <button
        type="button"
        className="image-input-preview"
        onClick={() => inputRef.current?.click()}
      >
        {value ? (
          <img src={value} alt="Vorschau" />
        ) : (
          <span className="image-input-placeholder">+</span>
        )}
      </button>

      <div className="image-input-actions">
        <button
          type="button"
          className="image-input-button"
          onClick={() => inputRef.current?.click()}
        >
          {value ? "Bild ändern" : "Bild auswählen"}
        </button>
        {value && (
          <button
            type="button"
            className="image-input-remove"
            onClick={() => onChange("")}
          >
            Entfernen
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        hidden
      />
    </div>
  );
}

export default ImageInput;
