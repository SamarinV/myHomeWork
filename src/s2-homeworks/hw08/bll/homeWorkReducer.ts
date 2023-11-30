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
        const sortedState = state.sort((a, b) => a.name.localeCompare(b.name));
        console.log(sortedState);
        return sortedState;
      }
      if (action.payload === "down") {
        const sortedState = state
          .sort((a, b) => a.name.localeCompare(b.name))
          .reverse();
        console.log(sortedState);
        return sortedState;
      }
      return state; // need to fix
    }
    case "check": {
      const sortedState = state.filter((a) => a.age >= 18);
      return sortedState; // need to fix
    }
    default:
      return state;
  }
};
