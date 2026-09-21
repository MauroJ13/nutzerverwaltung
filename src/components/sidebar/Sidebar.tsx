import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
  const location = useLocation();

  function isActive(path: string) {
    return location.pathname.startsWith(path);
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img
          className="sidebar-header-image"
          src="/devkarriere2.png"
          alt="Logo"
        />
      </div>
      <div className="sidebar-body">
        <Link to="/overview" className="sidebar-link">
          <button
            type="button"
            className={`sidebar-item${isActive("/overview") ? " sidebar-item--active" : ""}`}
          >
            Übersicht
          </button>
        </Link>
        <Link to="/create" className="sidebar-link">
          <button
            type="button"
            className={`sidebar-item${isActive("/create") ? " sidebar-item--active" : ""}`}
          >
            Neuer Nutzer
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
