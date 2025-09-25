import { Navigate } from "react-router-dom";

export default function SuccessPage({
  message = "Your password has been reset successfully.",
  description = " You can now log in with your new password.",
  href = "/login",
  buttonText = "Go to Login",
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col -mt-16">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{message}</h1>
            <p className="text-gray-600">{description}</p>
          </div>
          {/* Verify Button */}
          <button
            onClick={() => Navigate({ replace: true, to: href })}
            className="w-full bg-primary hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md shadow-primary/20"
          >
            {buttonText}
          </button>
        </div>
      </div> 
    </div>
  );
}
