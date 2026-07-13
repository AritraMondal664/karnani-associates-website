import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


const AdminLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData
      );

      localStorage.setItem(
        "token",
        data.token
      );

      alert("Login Successful");

      navigate("/admin/appointments");
    } catch (error) {
      alert("Invalid Email or Password");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="min-h-screen bg-gray-100 px-4">

    {/* Back to Website */}
    <div className="max-w-5xl mx-auto pt-8 mb-4">
      <Link
        to="/"
        className="inline-flex items-center text-blue-900 hover:underline font-medium"
      >
        ← Back to Website
      </Link>
    </div>

    <div className="flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl grid md:grid-cols-2">

        {/* Left Side */}

        <div className="hidden md:flex flex-col justify-center bg-gray-50 p-12 border-r">

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Karnani & Associates
          </h1>

          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Admin Portal
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Secure dashboard access for
            authorized personnel to manage
            appointment requests, client
            enquiries, and administrative
            operations.
          </p>

          <div className="mt-10 space-y-3">

            <div className="flex items-center gap-3 text-gray-700">
              <span>✓</span>
              <span>
                Appointment Management
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <span>✓</span>
              <span>
                Client Enquiry Tracking
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <span>✓</span>
              <span>
                Secure Administrator Access
              </span>
            </div>

          </div>
        </div>

        {/* Right Side */}

        <div className="p-8 md:p-12 flex flex-col justify-center">

          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold text-gray-900">
              Admin Login
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in to continue
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-3 text-sm text-gray-500"
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>
            </div>

            <div className="flex justify-end">

              <button
                type="button"
                onClick={() =>
                    navigate("/forgot-password")
                }
                className="text-blue-900 text-sm hover:underline"
                >
                Forgot Password?
              </button>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white p-3 rounded-lg font-medium transition"
            >
              {loading
                ? "Logging In..."
                : "Secure Login"}
            </button>

          </form>

          <div className="mt-8 text-center">

            <p className="text-xs text-gray-500">
              🔒 Authorized personnel only
            </p>

          </div>

        </div>

      </div>
      </div>

    </div>
  );
};

export default AdminLogin;