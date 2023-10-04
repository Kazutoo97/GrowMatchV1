import axios from "axios";

export const getProfile = () => async (dispatch) => {
  dispatch({ type: "GET_PENDING" });
  const tokenData = JSON.parse(localStorage.getItem("user"));
  if (!tokenData) {
    dispatch({ type: "GET_REJECTED", payload: "No token found" });
    return;
  }
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${tokenData.data}`,
        },
      }
    );
    dispatch({ type: "GET_FULFILLED", payload: response.data.data });
  } catch (error) {
    dispatch({ type: "GET_REJECTED", payload: error.message });
  }
};