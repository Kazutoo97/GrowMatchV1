const check = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: check ? check : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN_FULFILLED":
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
        message: action.payload,
      };
    case "LOGOUT_FULFILLED":
      return {
        ...state,
        user: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: "",
      };
    case "RESET":
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: "",
      };

    default:
      return state;
  }
};

export default AuthReducer;
