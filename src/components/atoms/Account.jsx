import React from "react";
import { Link } from "react-router-dom";

const Account = ({ title, titleLink, to }) => {
  return (
    <div className="bg-white flex items-center justify-center">
      <p className="px-8 py-4">
        {title}{" "}
        <Link to={to} className="text-[#079273] hover:underline font-semibold">
          {titleLink}
        </Link>
      </p>
    </div>
  );
};

export default Account;
