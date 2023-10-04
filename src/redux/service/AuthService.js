import axios from "axios";

export const loginService = async (email, password) => {
  const userData = {
    email,
    password,
  };

  const response = await axios.post(
    "https://giddy-lime-goshawk.cyclic.cloud/api/v1/auth/login",
    userData
  );

  return response.data;
};

export const registerService = async (
  firstName,
  lastName,
  email,
  password,
  dob,
  interest
) => {
  const userData = {
    firstName,
    lastName,
    email,
    password,
    dob,
    interest,
  };

  const response = await axios.post(
    "https://giddy-lime-goshawk.cyclic.cloud/api/v1/auth/register",
    userData
  );

  return response.data;
};
