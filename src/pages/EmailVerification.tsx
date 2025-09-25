import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function EmailVerification() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join("");
    if (verificationCode.length === 6) {
      console.log("Verification code:", verificationCode);
      // Handle verification logic here
    }
  };

  const handleResendCode = () => {
    console.log("Resending verification code...");
    // Handle resend logic here
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

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
              Please check your email!
            </h1>
            <p className="text-gray-600">
              We've emailed a 6-digit confirmation code to acb@domain, please
              enter the code in below box to verify your email.
            </p>
          </div>

          {/* Verification Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Code Input */}
            <div className="flex justify-center gap-3">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-14 h-14 text-center text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={code.join("").length < 6}
              className="w-full bg-primary hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md shadow-primary/20"
            >
              Verify
            </button>

            {/* Resend Code */}
            <div className="text-center text-sm">
              <span className="text-gray-600">Don't have a code? </span>
              <button
                type="button"
                onClick={handleResendCode}
                className="font-semibold text-primary hover:text-primary-700"
              >
                Resend code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
