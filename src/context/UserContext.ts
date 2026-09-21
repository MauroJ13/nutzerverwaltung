import { createContext, type Dispatch } from "react";
import type { User } from "../types/User";
import type { UserAction } from "../hooks/userManagementReducer";

type UserContextType = {
  users: User[];
  usersDispatch: Dispatch<UserAction>;
};

export const UserContext = createContext<UserContextType>({
  users: [],
  usersDispatch: () => {},
});
