const check = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: check ? check : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isSuccess: true,
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        user: null,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        user: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
      };
    case "LOGIN_RESET":
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
