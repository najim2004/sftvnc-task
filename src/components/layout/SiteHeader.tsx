import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SiteHeader() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("No token found. Already logged out or session expired.");
        setIsLoggedIn(false);
        navigate("/login");
        return;
      }

      await axios.post(
        "https://apitest.softvencefsd.xyz/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("authToken");
      setIsLoggedIn(false);
      navigate("/login");
    } catch (err: any) {
      console.error("Logout error:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to logout. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur ">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full">
        <Link to="/" className="inline-flex items-center gap-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9ce08ddd9826798ed909c3486719077692fc81f2?width=294"
            alt="ScapeSync"
            className="h-[60px] w-auto"
          />
        </Link>
        {isLoggedIn ? (
          <Button
            onClick={handleLogout}
            variant="default"
            size="lg"
            className="rounded-md bg-primary px-4 py-3 font-semibold shadow-md shadow-primary/20 hover:brightness-110 transition"
            disabled={loading}
          >
            {loading ? "Logging out..." : "Logout"}
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/registration")}
            variant="default"
            size="lg"
            className="rounded-md bg-primary px-4 py-3 font-semibold shadow-md shadow-primary/20 hover:brightness-110 transition"
          >
            Get Started
          </Button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
    </header>
  );
}
