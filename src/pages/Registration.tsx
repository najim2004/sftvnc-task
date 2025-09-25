import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import RoleSelection from "@/components/registration/RoleSelection";
import axios from "axios";

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRole, setSelectedRole] = useState<string | null>(
    searchParams.get("role")
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [terms, setTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const roleFromUrl = searchParams.get("role");
    if (roleFromUrl && !selectedRole) {
      setSelectedRole(roleFromUrl);
    }
  }, [searchParams, selectedRole]);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setSearchParams({ role: role });
  };

  const validateEmail = (email: string) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  interface AxiosErrorResponse {
    response?: {
      data?: {
        message?: string;
      };
    };
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !passwordConfirmation
    ) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      return;
    }
    if (!terms) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://apitest.softvencefsd.xyz/api/register",
        {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          password_confirmation: passwordConfirmation,
          terms,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        console.log("Registration successful:", response.data);
        navigate("/email-verification?email=" + email);
      } else {
        setError(
          response.data.message || "Registration failed. Please try again."
        );
      }
    } catch (err: unknown) {
      console.error("Registration error:", err);
      const errorObj = err as AxiosErrorResponse;
      if (
        errorObj.response &&
        errorObj.response.data &&
        typeof errorObj.response.data.message === "string"
      ) {
        setError(errorObj.response.data.message);
        console.log("Server error data:", errorObj.response.data); // Add this line
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!selectedRole) {
    return <RoleSelection onRoleSelect={handleRoleSelect} />;
  }

  return (
    <div className="min-h-screen bg-white flex -mt-16 items-center justify-center px-6 py-8">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Create your Account
          </h1>
          <p className="mt-2 text-gray-600">When sports Meets smart Tech.</p>
        </div>

        {/* Registration Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            {/* First Name Field */}
            <div className="relative w-1/2">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={loading}
              />
            </div>
            {/* Last Name Field */}
            <div className="relative w-1/2">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={loading}
              />
            </div>
          </div>
          {/* Email Field */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              disabled={loading}
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
              disabled={loading}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="w-full px-3 py-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
              disabled={loading}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              disabled={loading}
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-800">
              I agree to Tech Takes{" "}
              <Link to="#" className="underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="#" className="underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:brightness-110 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md shadow-primary/20"
            disabled={loading}
          >
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-600">OR</span>
          </div>
        </div>

        {/* Google Login */}
        <button
          className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          disabled={loading}
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/fa66cf372c43f675053abac1c24ac96841483537?width=48"
            alt="Google"
            className="w-6 h-6"
          />
          <span className="font-semibold text-gray-600">
            Continue with Google
          </span>
        </button>

        {/* Sign In Link */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link
            to="/login"
            className="font-semibold text-primary hover:text-primary-700"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
