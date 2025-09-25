import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }
    console.log("Updating password...");
    // Handle password update logic here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fa19a52d4e2f868a060a5ed9cd4954ce273b174d?width=274"
          alt="ScapeSync"
          className="h-14 w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Enter your new password.
            </h1>
            <p className="text-gray-600">
              Please enter the email address associated with your account, and
              we'll email you a link to reset your password.
            </p>
          </div>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Update Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:brightness-110 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md shadow-primary/20"
            >
              Update Password
            </button>

            {/* Back Button */}
            <Link
              to="/forgot-password"
              className="block w-full text-center py-3 px-4 text-primary font-semibold hover:text-primary-700 transition-colors"
            >
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
