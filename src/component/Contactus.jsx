import React from 'react';
import { useForm } from "react-hook-form";
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

function Contactus() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.success || "Form submitted successfully");
      } else {
        alert(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="max-w-screen-xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full mt-12 md:mt-32">
          <div className="space-y-5">
            <h1 className="text-4xl">
              Get in Touch with <span className="text-pink-500">Us !!!</span>
            </h1>
            <p className="text-md pb-5">
              We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Our team is here to assist you and ensure your experience with us is nothing short of exceptional.
            </p>
            <span className="text-pink-500">Contact Details</span>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-green-500 text-xl" />
                <span className="text-lg">Phone: +91 8544669544</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-500 text-xl" />
                <span className="text-lg">Email: riturajkumar708090@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-purple-500 text-xl" />
                <span className="text-lg">Website: www.Ebook.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-5 mb-20">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mt-10 mb-10">
          <h3 className="font-bold text-2xl text-gray-800 text-center mb-6">Contact Us</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
                {...register("phone", {
                  required: true,
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
              />
              {errors.phone && (
                <span className="text-sm text-red-500">
                  {errors.phone.message || "This field is required"}
                </span>
              )}
            </div>

            {/* Query */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Query</label>
              <textarea
                placeholder="Enter your query"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
                rows="4"
                {...register("query", { required: true })}
              ></textarea>
              {errors.query && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <h3 className="text-3xl font-semibold mb-4 text-center">Thank's You for<span className="text-pink-500"> Reaching Out !!!</span></h3>
    </>
  );
}

export default Contactus;
