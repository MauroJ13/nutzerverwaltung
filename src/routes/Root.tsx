import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

function Root() {
  return (
    <div className="app">
      <div className="app-sidebar">
        <Sidebar />
      </div>
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
