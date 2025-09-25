import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Reset password for:", email);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col -mt-16">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-md space-y-8">
          {/* Back Button */}
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-700"
          >
            <ChevronLeft size={18} />
            Back
          </Link>

          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Forgot your password?
            </h1>
            <p className="text-gray-600">
              Please enter the email address associated with your account, and
              we'll email you a link to reset your password.
            </p>
          </div>

          {/* Reset Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:brightness-110 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md shadow-primary/20"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
