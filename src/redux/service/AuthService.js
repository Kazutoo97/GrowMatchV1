import axios from "axios";

export const loginService = async (userName, password) => {
  const userData = {
    userName,
    password,
  };

  const response = await axios.post(
    "https://alert-lime-underwear.cyclic.app/api/v1/auth/login",
    userData
  );

  return response.data;
};

export const registerService = async (
  firstName,
  lastName,
  userName,
  email,
  password,
  dob,
  interest
) => {
  const userData = {
    firstName,
    lastName,
    userName,
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
