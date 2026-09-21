import "./App.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Overview from "./routes/overview/Overview";
import EditView from "./routes/edit/Edit";
import CreateView from "./routes/create/Create";
import { UserContext } from "./context/UserContext";
import userManagementReducer from "./hooks/userManagementReducer";
import { useReducer } from "react";
import type { User } from "./types/User";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/overview", element: <Overview /> },
      { path: "/create", element: <CreateView /> },
      { path: "/edit/:id", element: <EditView /> },
    ],
  },
]);

function App() {
  const [users, usersDispatch] = useReducer(
    userManagementReducer,
    [],
    fetchInitUserData,
  );

  function fetchInitUserData(): User[] {
    const stringUsers = localStorage.getItem("users");
    if (stringUsers) {
      return JSON.parse(stringUsers);
    } else {
      return [];
    }
  }

  return (
    <UserContext.Provider value={{ users, usersDispatch }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
