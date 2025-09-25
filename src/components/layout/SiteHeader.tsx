import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9ce08ddd9826798ed909c3486719077692fc81f2?width=294"
            alt="ScapeSync"
            className="h-9 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-800">
            Features
          </a>
          <a href="#audiences" className="hover:text-gray-800">
            Solutions
          </a>
          <a href="#testimonials" className="hover:text-gray-800">
            Testimonials
          </a>
          <a href="#faq" className="hover:text-gray-800">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Button className="inline-flex items-center rounded-md bg-primary px-4 py-2 font-semibold shadow-md shadow-primary/20 hover:brightness-110 transition">
            <a href="#get-started" className="size-full text-white">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
