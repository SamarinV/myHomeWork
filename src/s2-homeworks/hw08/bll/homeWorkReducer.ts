import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name
      if (action.payload === "up") {
        const copyState = [...state];
        copyState.sort((a, b) => a.name.localeCompare(b.name));
        return copyState;
      }
      if (action.payload === "down") {
        const copyState = [...state];
        copyState.sort((a, b) => a.name.localeCompare(b.name)).reverse();
        return copyState;
      }
      return state; // need to fix
    }
    case "check": {
      const copyState = [...state];
      const newState = copyState.filter((a) => a.age >= 18);
      return newState; // need to fix
    }
    default:
      return state;
  }
};
