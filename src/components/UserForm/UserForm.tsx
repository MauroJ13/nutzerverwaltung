import { useState } from "react";
import { useFormInput } from "../../hooks/useFormInput";
import TextInput from "../../components/TextInput/TextInput";
import DateInput from "../../components/DateInput/DateInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import ImageInput from "../../components/ImageInput/ImageInput";
import type { Gender, User } from "../../types/User";

type UserFormProps = {
  initialUser?: User;
  onSubmit: (user: Omit<User, "id">) => void;
  submitLabel?: string;
};

function UserForm({
  initialUser,
  onSubmit,
  submitLabel = "Speichern",
}: UserFormProps) {
  const [photo, setPhoto] = useState(initialUser?.photo ?? "");
  const userNameProps = useFormInput(initialUser?.name ?? "", true);
  const dobProps = useFormInput(initialUser?.dob ?? "", true);
  const genderProps = useFormInput(initialUser?.gender ?? "", true);
  const emailProps = useFormInput(initialUser?.email ?? "", true);
  const addressProps = useFormInput(initialUser?.address ?? "", true);
  const telephoneProps = useFormInput(initialUser?.phone ?? "", true);
  const websiteProps = useFormInput(initialUser?.web ?? "", true);

  function convertStringToGender(value: string): Gender {
    switch (value) {
      case "Männlich":
        return "Männlich";
      case "Weiblich":
        return "Weiblich";
      case "Divers":
        return "Divers";
      default:
        return "Keine Angabe";
    }
  }

  function isValidInputs(): boolean {
    const isUserNameValid = userNameProps.validateInput(userNameProps.value);
    const isDobValid = dobProps.validateInput(dobProps.value);
    const isGenderValid = genderProps.validateInput(genderProps.value);
    const isEmailValid = emailProps.validateInput(emailProps.value);
    const isAddressValid = addressProps.validateInput(addressProps.value);
    const isTelephoneValid = telephoneProps.validateInput(telephoneProps.value);
    const isWebsiteValid = websiteProps.validateInput(websiteProps.value);
    return (
      isUserNameValid &&
      isDobValid &&
      isGenderValid &&
      isEmailValid &&
      isAddressValid &&
      isTelephoneValid &&
      isWebsiteValid
    );
  }

  function handleSubmit() {
    if (isValidInputs()) {
      onSubmit({
        name: userNameProps.value,
        dob: dobProps.value,
        gender: convertStringToGender(genderProps.value),
        email: emailProps.value,
        address: addressProps.value,
        phone: telephoneProps.value,
        web: websiteProps.value,
        photo,
      });
    } else {
      alert("Bitte Informationen ergänzen.");
    }
  }

  return (
    <div className="input-form-container">
      <div className="input-container">
        <span className="input-title">Profilbild</span>
        <br />
        <ImageInput value={photo} onChange={setPhoto} />
      </div>

      <div className="input-container">
        <span className="input-title">Username</span>
        <br />
        <TextInput
          value={userNameProps.value}
          onChange={userNameProps.handleInputChangeEvent}
          error={userNameProps.error}
        />
      </div>

      <div className="input-container">
        <span className="input-title">Geburtsdatum</span>
        <br />
        <DateInput
          value={dobProps.value}
          onChange={dobProps.handleInputChangeEvent}
          error={dobProps.error}
        />
      </div>

      <div className="input-container">
        <span className="input-title">Geschlecht</span>
        <br />
        <SelectInput
          value={genderProps.value}
          onChange={genderProps.handleInputChangeEvent}
          options={["", "Männlich", "Weiblich", "Divers"]}
          error={genderProps.error}
        />
      </div>

      <div className="input-container">
        <span className="input-title">E-Mail</span>
        <br />
        <TextInput
          value={emailProps.value}
          onChange={emailProps.handleInputChangeEvent}
          error={emailProps.error}
        />
      </div>

      <div className="input-container">
        <span className="input-title">Post Adresse</span>
        <br />
        <TextInput
          value={addressProps.value}
          onChange={addressProps.handleInputChangeEvent}
          error={addressProps.error}
        />
      </div>

      <div className="input-container">
        <span className="input-title">Telefon</span>
        <br />
        <TextInput
          value={telephoneProps.value}
          onChange={telephoneProps.handleInputChangeEvent}
          error={telephoneProps.error}
        />
      </div>

      <div className="input-container">
        <span className="input-title">Webseite</span>
        <br />
        <TextInput
          value={websiteProps.value}
          onChange={websiteProps.handleInputChangeEvent}
          error={websiteProps.error}
        />
      </div>

      <SubmitButton onClick={handleSubmit} label={submitLabel} />
    </div>
  );
}

export default UserForm;
