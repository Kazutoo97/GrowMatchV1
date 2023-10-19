import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import HaveAccount from "../components/atoms/HaveAccount";
import ButtonSubmit from "../components/atoms/ButtonSubmit";
import LabelForm from "../components/atoms/LabelForm";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const { email } = data;
      const response = await axios.put(
        "http://localhost:8000/api/v1/forgot-password",
        { email }
      );

      console.log(response.data.message);
      toast.success(response.data.message);
      reset();
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="pt-[74px] h-screen flex justify-center items-center bg-gray-400/20">
      <div className="max-w-[28rem] w-full p-8 bg-white shadow-xl border border-slate-200 rounded-xl">
        <h2 className="text-center mb-6 text-2xl font-bold">Lupa Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mb-4">
            <LabelForm title="Email" required="*" />
            <div className="w-full">
              <input
                type="text"
                className={`w-full h-10 border-[2px] text-gray-600 px-4 rounded-md text-base outline-none  focus:border-[2px] ${
                  errors.email
                    ? "focus:border-red-500 border-red-500 border-[2px]"
                    : "focus:border-primaryFive border-gray-300"
                }`}
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
            </div>
            {errors.email?.message && (
              <p className="text-xs text-red-500 mt-[2px] ml-1 font-medium">
                {errors.email?.message}
              </p>
            )}
          </div>
          <ButtonSubmit type="submit" title="Reset Password" />
        </form>
        <HaveAccount />
      </div>
    </div>
  );
};

export default ForgotPassword;
