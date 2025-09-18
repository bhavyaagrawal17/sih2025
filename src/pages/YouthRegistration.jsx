import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function YouthRegistration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    skills: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Registration submitted successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-navy-900 mb-6">
          Youth Registration
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* DOB & Gender */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your full address"
            />
          </div>

          {/* Education */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Highest Education
            </label>
            <input
              type="text"
              name="education"
              value={form.education}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500"
              placeholder="E.g. B.Tech in CSE, Class 12th, Diploma, etc."
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              value={form.skills}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500"
              placeholder="E.g. Python, Communication, Web Development"
            />
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500"
                placeholder="Re-enter password"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-bold text-lg hover:scale-105 transform transition duration-300 shadow-lg"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}
