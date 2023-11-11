import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../libs/axios";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import InputPassword from "../atoms/InputPassword";
import ForgotPassword from "../atoms/ForgotPassword";
import ButtonSubmit from "../atoms/ButtonSubmit";
import Account from "../atoms/Account";
import PolicyCookies from "../atoms/PolicyCookies";

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const { isLoading, isSuccess, user } = useSelector((state) => state.Auth);
  const { registerUserName } = useSelector((state) => state.Email);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      userName: registerUserName || "",
      password: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }
  }, [isSuccess, user, navigate]);

  const getProfile = async () => {
    const tokenData = JSON.parse(localStorage.getItem("user"));
    const token = tokenData;
    try {
      const response = await axiosInstance.get("/api/v1/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: "PROFILE_FULFILLED", payload: response.data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = async (data) => {
    dispatch({ type: "LOGIN_PENDING" });

    const { userName, password } = data;
    try {
      const response = await axiosInstance.post("/api/v1/auth/login", {
        userName,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data.data));
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data });
      getProfile();
      toast.success(response.data.message);
      dispatch({ type: "LOGIN_RESET" });
    } catch (error) {
      dispatch({ type: "LOGIN_REJECTED" });
      toast.error(error.response.data.message);
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordIcon(true);
      setPasswordType("text");
    } else {
      setPasswordIcon(false);
      setPasswordType("password");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mb-4 mt-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="Username"
            className={`w-full h-[3rem] border-[2px] text-gray-600 rounded-full px-4 placeholder:text-primaryFive text-base outline-none  focus:border-[2px] ${
              errors.userName
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-black/20 "
            }`}
            {...register("userName", {
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/,
                message:
                  "Password must be at least 6 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (!@#$%^&*)",
              },
              required: { value: true, message: "Password is required" },
            })}
          />
        </div>
        {errors.userName?.message && (
          <p className="text-xs text-red-500 mt-[2px] ml-1 font-medium">
            {errors.userName?.message}
          </p>
        )}
      </div>

      <div className="w-full  mb-4">
        <div className="w-full relative">
          <input
            type={passwordType}
            placeholder="Password"
            className={`w-full h-[3rem] border-[2px] text-gray-600 rounded-full pl-4 pr-12 text-base placeholder:text-primaryFive outline-none focus:border-[2px] ${
              errors.password
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-black/20"
            }`}
            {...register("password", {
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/,
                message:
                  "Password must be at least 6 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (!@#$%^&*)",
              },
              required: { value: true, message: "Password is required" },
            })}
          />
          <InputPassword
            togglePassword={togglePassword}
            passwordIcon={passwordIcon}
          />
        </div>
        {errors.password?.message && (
          <p className="text-xs text-red-500 mt-[2px] ml-1 font-medium">
            {errors.password?.message}
          </p>
        )}
      </div>

      <PolicyCookies />
      <ButtonSubmit
        type="submit"
        title="Login"
        disabled={!isValid || isLoading}
      />
      <ForgotPassword />
      <Account title="Havn't account?" titleLink="Register" to="/register" />
    </form>
  );
};

export default FormLogin;
