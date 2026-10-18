import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/devkarriere2.png";
import "./Sidebar.scss";

function Sidebar() {
  const [logoFailed, setLogoFailed] = useState(false);

  function itemClass({ isActive }: { isActive: boolean }) {
    return `sidebar-item${isActive ? " sidebar-item--active" : ""}`;
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
      <nav className="sidebar-body">
        <NavLink to="/overview" className={itemClass}>
          Übersicht
        </NavLink>
        <NavLink to="/create" className={itemClass}>
          Neuer Nutzer
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
