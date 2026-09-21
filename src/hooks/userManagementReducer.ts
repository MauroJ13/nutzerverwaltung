import type { User } from "../types/User";

export type UserAction =
  | { type: "ADD_USER"; user: User }
  | { type: "UPDATE_USER"; user: User }
  | { type: "DELETE_USER"; id: number };

function userManagementReducer(state: User[], action: UserAction): User[] {
  let newState: User[];

  switch (action.type) {
    case "ADD_USER":
      newState = [...state, action.user];
      break;
    case "UPDATE_USER":
      newState = state.map((u) => (u.id === action.user.id ? action.user : u));
      break;
    case "DELETE_USER":
      newState = state.filter((u) => u.id !== action.id);
      break;
    default:
      newState = state;
  }

  localStorage.setItem("users", JSON.stringify(newState));
  return newState;
}

export default userManagementReducer;
