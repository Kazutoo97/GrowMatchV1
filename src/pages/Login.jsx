import React, { useEffect, useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import { useDispatch, useSelector } from "react-redux";
import { loginService } from "../redux/service/AuthService";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.Auth
  );
  const { registerUserName } = useSelector((state) => state.Email);
  const [formData, setFormData] = useState({
    userName: registerUserName || "",
    password: "",
  });
  const { userName, password } = formData;

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
  }, [isError, isSuccess, navigate, message, user, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const getProfile = async () => {
    const tokenData = JSON.parse(localStorage.getItem("user"));
    const token = tokenData?.data;
    try {
      const response = await axios.get(
        "https://giddy-lime-goshawk.cyclic.cloud/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: "PROFILE_FULFILLED", payload: response.data.data });
      console.log(response.data.data);
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: "PROFILE_REJECTED",
        payload: error.response.data.message,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_PENDING" });

    try {
      const data = await loginService(userName, password);
      dispatch({ type: "LOGIN_FULFILLED", payload: data });
      localStorage.setItem("user", JSON.stringify(data));
      toast.success(data.message);
      dispatch({ type: "RESET" });
      getProfile();
      dispatch({ type: "REGISTER_RESET" });
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
      dispatch({
        type: "LOGIN_REJECTED",
        payload: error.response.data.message,
      });
    }
  };

  return (
    <section className="mt-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex w-[500px] mx-auto mb-12">
          <div className="flex flex-col justify-center items-center bg-gray-200 py-6 px-9 w-full rounded-lg shadow-lg">
            <div className="w-full ">
              <div className="flex justify-center items-center gap-x-3">
                <Logo className="h-10 w-10" />
                <div>
                  <h3 className="text-[24px] ">GrowMatch</h3>
                  <h3 className="text-sm -mt-2">Match and Grow Together</h3>
                </div>
              </div>
              <div className="mt-8 mb-4 px-8 py-4 text-center bg-white w-full">
                <span className="w-[60%] text-2xl">
                  Login to grow together with your friends.
                </span>
              </div>
              <button
                type="button"
                className="flex items-center justify-center space-x-4 py-3 px-6 text-white bg-[#079273] rounded-sm w-full"
              >
                <AiOutlineGoogle className="w-6 h-6" />
                <p className="text-2xl font-medium ">Masuk lewat google</p>
              </button>
              <div className="pt-6 flex flex-row justify-center items-center w-full space-x-4">
                <span className="h-[2px] bg-[#079273] w-full rounded-lg"></span>
                <span className="whitespace-nowrap text-[#079273] font-medium">
                  OR
                </span>
                <span className="h-[2px] bg-[#079273] w-full rounded-lg"></span>
              </div>

              <form onSubmit={onSubmit}>
                <div className="flex flex-col w-full pt-6 space-y-6">
                  <div className="flex ">
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full h-[3rem] rounded-full px-5"
                      name="userName"
                      value={userName}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full h-[3rem] rounded-full px-5"
                      name="password"
                      value={password}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <p className="pt-4 text-sm text-center">
                    By signing up, you agree to our Terms , Privacy Policy and
                    Cookies Policy .
                  </p>

                  <button
                    disabled={isLoading}
                    type="submit"
                    className="flex items-center justify-center space-x-4 py-3 px-6 text-white bg-[#079273] rounded-sm w-full text-2xl disabled:cursor-not-allowed"
                  >
                    Login
                  </button>
                  <Link className="text-[#079273] text-right font-normal">
                    Forgot password?
                  </Link>

                  <div className="mt-4  bg-white flex items-center justify-center">
                    <p className="px-8 py-4">
                      Havn’t an account?{" "}
                      <Link to="/register" className="text-[#079273]">
                        Register
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
