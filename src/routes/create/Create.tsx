import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.scss";
import { UserContext } from "../../context/UserContext";
import type { User } from "../../types/User";
import UserForm from "../../components/UserForm/UserForm";

function CreateView() {
  const { usersDispatch } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(newUserFields: Omit<User, "id">) {
    const user: User = { id: Date.now(), ...newUserFields };
    usersDispatch({ type: "ADD_USER", user });
    navigate("/overview");
  }

  return (
    <div className="create-container">
      <h2 className="create-title">Neuen Nutzer anlegen</h2>
      <UserForm onSubmit={handleSubmit} submitLabel="Erstellen" />
    </div>
  );
}

export default CreateView;
