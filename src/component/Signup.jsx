import React from 'react';
import { useForm } from "react-hook-form";
import Login from "../component/Login";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // Watch password field to confirm password match
  const password = watch("password");

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-black-900">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <a href="/">✕</a>
            </button>

            <h3 className="font-bold text-lg">Sign Up</h3>

            {/* Name */}
            <div className="mt-5 space-y-2">
              <span>Name</span><br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              /> <br/>
              {errors.name && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Email */}
            <div className="mt-5 space-y-2">
              <span>Email</span><br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              /> <br/>
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-5 space-y-2">
              <span>Password</span><br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true, minLength: 6 })}
              /> <br/>
              {errors.password && (
                <span className="text-sm text-red-500">Password is required and must be at least 6 characters long</span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mt-5 space-y-2">
              <span>Confirm Password</span><br />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password || "Passwords do not match",
                })}
              /> <br/>
              {errors.confirmPassword && (
                <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>
              )}
            </div>

            {/* Signup Button */}
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">
                Signup
              </button>
              <p>
                Have an Account?{" "}
                <button
                  type="button"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById('my_modal_3').showModal()}
                >
                  Log in
                </button>{" "}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
