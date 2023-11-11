import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="text-right my-4">
      <Link
        to="/forgot-password"
        className="text-[#079273] text-right text-sm font-normal hover:underline"
      >
        Forgot password?
      </Link>
    </div>
  );
};

export default ForgotPassword;
