const initialState = {
  registerUserName: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "REGISTER_FULFILLED":
      return {
        ...state,
        registerUserName: action.payload,
        isLoading: false,
        isSuccess: true,
        message: action.payload.message,
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload,
      };

    case "REGISTER_RESET":
      return {
        ...state,
        registerUserName: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: "",
      };

    default:
      return state;
  }
};

export default RegisterReducer;
