export const storeUserReducer = (state, action) => {
  switch (action.type) {
    case "STORE_USER":
      return {
        isAuthenticated: true,
        data: action.payload,
      };
    case "REMOVE_USER":
      return {
        isAuthenticated: false,
        data: {},
      };
    default:
      return {
        ...state,
      };
  }
};
