import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/devkarriere2.png";
import "./Sidebar.scss";

function Sidebar() {
  const location = useLocation();
  const [logoFailed, setLogoFailed] = useState(false);

  function isActive(path: string) {
    return location.pathname.startsWith(path);
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        {logoFailed ? (
          <span className="sidebar-header-fallback">DevKarriere</span>
        ) : (
          <img
            className="sidebar-header-image"
            src={logo}
            alt="DevKarriere Logo"
            onError={() => setLogoFailed(true)}
          />
        )}
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
