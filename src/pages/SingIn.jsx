import React from "react";
import { Link } from "react-router-dom";
const SingIn = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sm:flex h-screen bg-gray-100">
      <div className=" h-24 sm:w-1/3 sm:h-screen  bg-black text-white text-6xl flex items-center justify-center ">
        <Link to="/dashboard">Board</Link>
      </div>
      <div className="  sm:w-4/6  h-screen bg-gray-200 ">
        <div className="w-full pt-8 sm:pl-60 sm:pt-28 md:pl-12 md:pt-32 lg:pl-60">
          <h1 className="font-bold text-4xl mb-2 text-center sm:text-start">
            Sign In{" "}
          </h1>
          <h3 className="font-semibold mb-6 text-center sm:text-start">
            Sign in to your account
          </h3>
          <div className=" w-full flex">
            <button className="flex items-center justify-center bg-white  mr-8 p-1 pl-4 pr-4 rounded-2xl text-gray-500">
              <img
                className=" ml-2 mr-2"
                src="/assests/images/google-icon 1.png"
                alt=""
              />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center bg-white p-1 pl-4 pr-4 rounded-2xl text-gray-500">
              <img
                className=" ml-2 mr-2"
                src="/assests/images/apple 1.png"
                alt=""
              />
              Sign in with Apple
            </button>
          </div>
          <div className=" w-full sm:w-96 h-70 bg-gray-50 mt-5 rounded-xl p-6">
            <form action="" onSubmit={onSubmit}>
              <label htmlFor="" className="font-semibold">
                Email address
              </label>
              <br />
              <input
                type="email"
                required
                className="bg-gray-200 w-full rounded-xl outline-none p-1 mt-1 mb-4"
              />
              <label htmlFor="" className="font-semibold">
                Password
              </label>
              <br />
              <input
                type="password"
                required
                className="bg-gray-200 w-full rounded-xl outline-none p-1 mt-1"
              />
              <p className="text-blue-400 cursor-pointer mt-2">
                Forgot password?
              </p>
              <Link to="dashboard">
                <button
                  // onClick={() => alert("sigin successful")}
                  className="w-full bg-black text-white rounded-xl p-2 mt-5"
                >
                  Sign In
                </button>
              </Link>
            </form>
          </div>
          <p className="ml-14 mt-2">
            Don’t have an account?
            <span className="text-blue-400 cursor-pointer"> Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
