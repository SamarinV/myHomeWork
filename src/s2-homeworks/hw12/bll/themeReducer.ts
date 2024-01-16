const initState: ThemeState = {
  themeId: 1,
};

type ThemeState = {
  themeId: number;
};

export const themeReducer = (
  state: ThemeState = initState,
  action: ThemeActionType
): ThemeState => {
  // fix any
  switch (action.type) {
    // дописать
    case "SET_THEME_ID": {
      return { ...state, themeId: action.id };
    }
    default:
      return state;
  }
};

type ThemeActionType = {
  type: "SET_THEME_ID";
  id: number;
};

export const changeThemeId = (id: number): ThemeActionType => ({
  type: "SET_THEME_ID",
  id,
});
