import { useForm } from "react-hook-form";
import React from "react";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button for the modal */}
            <a
              href="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </a>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-5 space-y-2">
              <span>Email</span><br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br/>
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
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              {/* Button */}
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <a href="/Signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </a>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
