import { useState } from "react";
import {
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      password !== confirmPassword
    ) {
      alert(
        "Passwords do not match"
      );
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password/${token}`,
        {
          password,
        }
      );

      console.log(data);

      setSuccess(true);

      setTimeout(() => {
        navigate("/admin/login");
      }, 3000);
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">

        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">

          <div className="text-green-600 text-6xl mb-4">
            ✓
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Password Reset Successful
          </h2>

          <p className="text-gray-600 mb-6">
            Your password has been
            updated successfully.
          </p>

          <button
            onClick={() =>
              navigate(
                "/admin/login"
              )
            }
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-medium"
          >
            Go to Login
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Redirecting automatically
            in 3 seconds...
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Reset Password
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Create a new password for
          your account
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>

            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

          </div>

          <div>

            <input
              type="password"
              placeholder="Confirm Password"
              value={
                confirmPassword
              }
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

            {confirmPassword &&
              password !==
                confirmPassword && (
                <p className="text-red-500 text-sm mt-2">
                  Passwords do not
                  match
                </p>
              )}

            {confirmPassword &&
              password ===
                confirmPassword && (
                <p className="text-green-600 text-sm mt-2">
                  Passwords match
                </p>
              )}

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white p-3 rounded-lg font-medium transition"
          >
            {loading
              ? "Updating..."
              : "Reset Password"}
          </button>

        </form>

        <div className="mt-6 text-center">

          <Link
            to="/admin/login"
            className="text-blue-900 hover:underline font-medium"
          >
            ← Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ResetPassword;