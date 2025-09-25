import { Link } from "react-router-dom";

export default function RoleSelection({
  onSelectRole,
}: {
  onSelectRole: (selectedRole: string) => void;
}) {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-6 py-20 -mt-16">
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Who Are You?
          </h1>
          <p className="text-gray-600 font-semibold">
            Choose the option that best describes you so we can tailor your
            experience.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl">
          {/* Client Card */}
          <div
            onClick={() => onSelectRole("client")}
            className="group flex-1 bg-white border-2 border-primary-100 rounded-2xl p-8 text-center hover:border-primary-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <div className="mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/729133f7390c7af09ab8c35f66bb281914c999d1?width=630"
                alt="Client illustration"
                className="w-full h-auto max-w-48 mx-auto"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              I'm a Client
            </h2>
            <p className="text-gray-600 text-sm">
              Discover services & track progress effortlessly.
            </p>
          </div>

          {/* Business Owner Card */}
          <div
            onClick={() => onSelectRole("business-owner")}
            className="group flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-primary-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <div className="mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4e1e1944bf5e8eb12a8376cf4c3c380a0e227b99?width=630"
                alt="Business owner illustration"
                className="w-full h-auto max-w-48 mx-auto"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              I'm a Business Owner
            </h2>
            <p className="text-gray-600 text-sm">
              Manage jobs, staff & clients with ease.
            </p>
          </div>
        </div>

        {/* Optional back link */}
        <div className="mt-12">
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
          >
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
