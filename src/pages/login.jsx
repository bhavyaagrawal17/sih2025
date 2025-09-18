import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 via-white to-blue-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to PM Internship Scheme
        </h2>
        <p className="mt-2 text-sm text-center text-gray-500">
          Welcome back! Please enter your credentials to continue.
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <a
              href="#"
              className="block mt-2 text-sm text-orange-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/youth-registration" className="text-orange-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
