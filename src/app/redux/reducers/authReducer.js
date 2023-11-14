// store/reducers/authReducer.js

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    // Add more cases as needed
    default:
      return state;
  }
};

export default authReducer;
