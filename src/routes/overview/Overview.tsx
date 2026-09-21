import { useContext } from "react";
import "./Overview.scss";
import { UserContext } from "../../context/UserContext";
import UserCard from "../../components/UserCard/UserCard";

function Overview() {
  const { users } = useContext(UserContext);

  return (
    <div className="overview-container">
      <div className="overview-header">
        <h2 className="overview-title">Nutzerübersicht</h2>
      </div>

      {users.length === 0 ? (
        <div className="overview-empty">
          Noch keine Nutzer vorhanden. Leg los und erstelle den ersten über die
          Sidebar.
        </div>
      ) : (
        <div className="overview-grid">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Overview;
