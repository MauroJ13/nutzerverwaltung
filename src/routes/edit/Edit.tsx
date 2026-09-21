import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.scss";
import { UserContext } from "../../context/UserContext";
import UserForm from "../../components/UserForm/UserForm";
import type { User } from "../../types/User";

function EditView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, usersDispatch } = useContext(UserContext);

  const user = users.find((u) => u.id === Number(id));

  function handleSubmit(updatedFields: Omit<User, "id">) {
    if (!user) return;
    usersDispatch({
      type: "UPDATE_USER",
      user: { ...updatedFields, id: user.id },
    });
    navigate("/overview");
  }

  function handleDelete() {
    if (!user) return;
    const confirmed = window.confirm(
      `"${user.name}" wirklich unwiderruflich löschen?`,
    );
    if (confirmed) {
      usersDispatch({ type: "DELETE_USER", id: user.id });
      navigate("/overview");
    }
  }

  if (!user) {
    return (
      <div className="edit-container edit-container--empty">
        <p>Nutzer wurde nicht gefunden.</p>
      </div>
    );
  }

  return (
    <div className="edit-container">
      <div className="edit-header">
        <h2 className="edit-title">Nutzer bearbeiten</h2>
        <button type="button" className="delete-button" onClick={handleDelete}>
          Löschen
        </button>
      </div>
      <UserForm
        initialUser={user}
        onSubmit={handleSubmit}
        submitLabel="Speichern"
      />
    </div>
  );
}

export default EditView;
