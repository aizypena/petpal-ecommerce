import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useDocumentTitle from "../shared/useDocumentTitle";
import axios from "axios";

export const SignUp = () => {
  // dynamic title
  useDocumentTitle("Sign Up | PetPal");

  // useForm hook from react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watch password and confirm password fields
  const password = watch("password", "");

  // handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        email: data.email,
        password: data.password,
      });
      console.log(response.data);
      alert("Account created successfully");
    } catch (error) {
      console.error("Error creating account:", error);
      alert(
        "Error creating account: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="flex flex-col justify-center sm:h-screen p-4 font-mono bg-[#FFC600]">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 bg-amber-50">
        <div className="text-center mb-12">
          <Link to="/">
            <img
              src="PetPalNavPic.png"
              alt="logo"
              className="w-40 inline-block"
            />
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input
                name="email"
                type="text"
                {...register("email", { required: "Email is required" })}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                {...register("password", { required: "Password is required" })}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Confirm Password
              </label>
              <input
                name="cpassword"
                type="password"
                {...register("cpassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter confirm password"
              />
              {errors.cpassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.cpassword.message}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                {...register("rememberMe", {
                  required: "You must accept the terms and conditions",
                })}
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="text-gray-800 ml-3 block text-sm"
              >
                I accept the{" "}
                <Link
                  to="/terms-conditions"
                  className="text-blue-600 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </Link>
              </label>
              {errors.rememberMe && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.rememberMe.message}
                </p>
              )}
            </div>
          </div>

          <div className="!mt-8">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
