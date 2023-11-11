import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../libs/axios";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import InputPassword from "../atoms/InputPassword";
import ButtonSubmit from "../atoms/ButtonSubmit";
import Account from "../atoms/Account";
import PolicyCookies from "../atoms/PolicyCookies";

const FormRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const { isLoading, isSuccess } = useSelector((state) => state.Email);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    trigger,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      konfirmasiPassword: "",
      dob: "",
      interest: "",
    },
    mode: "onChange",
  });

  const password = watch("password");

  useEffect(() => {
    trigger("dob");

    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess, navigate, trigger]);

  const onSubmit = async (data) => {
    dispatch({ type: "REGISTER_PENDING" });

    const { firstName, lastName, userName, email, password, dob, interest } =
      data;
    try {
      const response = await axiosInstance.post("/api/v1/auth/register", {
        firstName,
        lastName,
        userName,
        email,
        password,
        dob,
        interest,
      });
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: response.data.data.userName,
      });
      toast.success(response.data.message);
    } catch (error) {
      dispatch({ type: "REGISTER_REJECTED" });
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
            placeholder="First Name"
            className={`w-full h-[3rem] border-[2px] text-gray-600 rounded-full px-4 placeholder:text-primaryFive text-base outline-none  focus:border-[2px] ${
              errors.firstName
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-black/20 "
            }`}
            {...register("firstName", {
              required: { value: true, message: "First Name is required" },
            })}
          />
        </div>
        {errors.firstName?.message && (
          <p className="text-xs text-red-500 mt-[2px] mx-4 font-medium">
            {errors.firstName?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-4 mt-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="Last Name"
            className={`w-full h-[3rem] border-[2px] text-gray-600 rounded-full px-4 placeholder:text-primaryFive text-base outline-none  focus:border-[2px] ${
              errors.lastName
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-black/20 "
            }`}
            {...register("lastName", {
              required: { value: false, message: "Last Name is not required" },
            })}
          />
        </div>
        {errors.lastName?.message && (
          <p className="text-xs text-red-500 mt-[2px] mx-4 font-medium">
            {errors.lastName?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-4">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Username"
            className={`w-full h-[3rem] border-[2px] text-gray-600 rounded-full px-4  text-base placeholder:text-primaryFive outline-none focus:border-[2px] ${
              errors.userName
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-black/20"
            }`}
            {...register("userName", {
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/,
                message:
                  "Username must be at least 6 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (!@#$%^&*)",
              },
              required: { value: true, message: "userName is required" },
            })}
          />
        </div>
        {errors.userName?.message && (
          <p className="text-xs text-red-500 mt-[2px] mx-4 font-medium">
            {errors.userName?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-4">
        <div className="w-full relative">
          <input
            type="email"
            placeholder="Email"
            className={`w-full h-[3rem] border-[2px] text-gray-600 rounded-full px-4  text-base placeholder:text-primaryFive outline-none focus:border-[2px] ${
              errors.email
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-black/20"
            }`}
            {...register("email", {
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Enter a valid email",
              },
              required: { value: true, message: "Email is required" },
            })}
          />
        </div>
        {errors.email?.message && (
          <p className="text-xs text-red-500 mt-[2px] mx-4 font-medium">
            {errors.email?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-4">
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

      <div className="w-full mb-4">
        <div className="w-full relative">
          <input
            type={passwordType}
            placeholder="Confirm Password"
            className={`w-full h-[3rem] border-[2px] text-gray-600 rounded-full pl-4 pr-12 text-base placeholder:text-primaryFive outline-none focus:border-[2px] ${
              errors.konfirmasiPassword
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-black/20"
            }`}
            {...register("konfirmasiPassword", {
              required: {
                value: true,
                message: "Confirm password is required",
              },
              validate: (value) => {
                if (value !== password) {
                  return "Confirm password do not match";
                }
              },
            })}
          />
          <InputPassword
            togglePassword={togglePassword}
            passwordIcon={passwordIcon}
          />
        </div>
        {errors.konfirmasiPassword?.message && (
          <p className="text-xs text-red-500 mt-[2px] ml-1 font-medium">
            {errors.konfirmasiPassword?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-4">
        <div className="w-full relative">
          <input
            type="date"
            className={`w-full h-[3rem] border-[2px] text-gray-600 rounded-full pl-4 pr-4 text-base placeholder:text-primaryFive outline-none focus:border-[2px] ${
              errors.dob
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-black/20"
            }`}
            {...register("dob", {
              required: {
                value: true,
                message: "Date of Birthday is required",
              },
            })}
          />
        </div>
        {errors.dob?.message && (
          <p className="text-xs text-red-500 mt-[2px] mx-4 font-medium">
            {errors.dob?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-4">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Interest"
            className={`w-full h-[3rem] border-[2px] text-gray-600 rounded-full pl-4 pr-4 text-base placeholder:text-primaryFive outline-none focus:border-[2px] ${
              errors.interest
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-black/20"
            }`}
            {...register("interest", {
              minLength: {
                value: 3,
                message: "Minimal interest 3 character",
              },
              required: {
                value: true,
                message: "Intern is required",
              },
            })}
          />
        </div>
        {errors.interest?.message && (
          <p className="text-xs text-red-500 mt-[2px] mx-4 font-medium">
            {errors.interest?.message}
          </p>
        )}
      </div>

      <PolicyCookies />
      <ButtonSubmit
        type="submit"
        title="Register"
        disabled={!isValid || isLoading}
        className="mb-4"
      />
      <Account to="/login" title="Have an account?" titleLink="Login" />
    </form>
  );
};

export default FormRegister;
