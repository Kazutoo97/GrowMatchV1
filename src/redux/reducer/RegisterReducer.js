const initialState = {
  registerUserName: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        registerUserName: action.payload,
        isLoading: false,
        isSuccess: true,
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };

    case "REGISTER_RESET":
      return {
        ...state,
        registerUserName: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
      };

    default:
      return state;
  }
};

export default RegisterReducer;
