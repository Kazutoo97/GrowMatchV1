const initialState = {
  dataProfile: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const GetProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "PROFILE_FULFILLED":
      return {
        ...state,
        dataProfile: action.payload,
        isLoading: false,
        isSuccess: true,
      };
    case "PROFILE_REJECTED":
      return {
        ...state,
        dataProfile: null,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload,
      };
    case "PROFILE_LOGOUT":
      return {
        ...state,
        dataProfile: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: "",
      };

    default:
      return state;
  }
};

export default GetProfileReducer;
