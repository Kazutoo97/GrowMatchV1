import React, { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import { useDispatch } from "react-redux";
import { registerService } from "../redux/service/AuthService";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: "",
      interest: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    dispatch({ type: "REGISTER_PENDING" });

    try {
      const { firstName, lastName, email, password, dob, interest } = data;
      const response = await registerService(
        firstName,
        lastName,
        email,
        password,
        dob,
        interest
      );
      dispatch({ type: "REGISTER_FULFILLED", payload: response.data.email });
      console.log(data.data);
      toast.success(response.message);
      navigate("/login");
    } catch (error) {
      console.log(error.response || error.message);
      toast.error(error.message);
    }
  };

  const password = watch("password");

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-full pt-6 space-y-6">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full h-[3rem] rounded-full px-5"
                      {...register("firstName", {
                        minLength: {
                          value: 3,
                          message: "Name length must be at least 3 character",
                        },
                        required: {
                          value: true,
                          message: "Name is required",
                        },
                      })}
                    />
                    {errors.firstName?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full h-[3rem] rounded-full px-5"
                      {...register("lastName", {
                        minLength: {
                          value: 1,
                          message: "Name length must be at least 1 character",
                        },
                        required: {
                          value: true,
                          message: "Name is required",
                        },
                      })}
                    />
                    {errors.lastName?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lastName?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-[3rem] rounded-full px-5"
                      {...register("email", {
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Enter a valid email",
                        },
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                      })}
                    />
                    {errors.email?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full h-[3rem] rounded-full px-5"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                          message:
                            "Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, and 1 number",
                        },
                      })}
                    />
                    {errors.password?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full h-[3rem] rounded-full px-5"
                      {...register("confirmPassword", {
                        required: {
                          value: true,
                          message: "Confirm password is required",
                        },
                        validate: (value) => {
                          if (value !== password) {
                            return "Passwords do not match";
                          }
                        },
                      })}
                    />
                    {errors.confirmPassword?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="Date"
                      placeholder="Date Of birth"
                      className="w-full h-[3rem] rounded-full px-5"
                      {...register("dob", {
                        required: {
                          value: true,
                          message: "DOB is required",
                        },
                      })}
                    />
                    {errors.dob?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.dob?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Interest"
                      className="w-full h-[3rem] rounded-full px-5"
                      {...register("interest", {
                        required: {
                          value: true,
                          message: "Interest is required",
                        },
                        minLength: {
                          value: 3,
                          message: "interest must be at least 3 characters",
                        },
                      })}
                    />
                    {errors.interest?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.interest?.message}
                      </p>
                    )}
                  </div>
                  <p className="pt-4 text-sm text-center">
                    By signing up, you agree to our Terms , Privacy Policy and
                    Cookies Policy .
                  </p>

                  <button
                    type="submit"
                    className="flex items-center justify-center space-x-4 py-3 px-6 text-white bg-[#079273] rounded-sm w-full text-2xl"
                  >
                    Register
                  </button>
                  <Link className="text-[#079273] text-right font-normal">
                    Forgot password?
                  </Link>

                  <div className="mt-4  bg-white flex items-center justify-center">
                    <p className="px-8 py-4">
                      Havn’t an account?{" "}
                      <Link to="/login" className="text-[#079273]">
                        Login
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

export default Register;
