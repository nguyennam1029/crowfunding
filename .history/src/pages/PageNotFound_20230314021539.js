import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <div className="text-center ">
        <img src="/404.png" alt="notfound" className="inline-block mb-10" />
        <h1 className="mb-5 text-6xl font-bold">
          404 - Looks like you're lost.
        </h1>
        <p className="description">
          Maybe this page used to exist or you just spelled something wrong.
          Chances are your spelled something wrong, so can you double check the
          URL?
        </p>
        <button onClick={() => navigate(-1)} className="back">
          Go back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
