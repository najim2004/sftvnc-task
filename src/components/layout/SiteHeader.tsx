import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export default function SiteHeader() {
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
        <Button
          variant="default"
          size="lg"
          className="rounded-md bg-primary px-4 py-3 font-semibold shadow-md shadow-primary/20 hover:brightness-110 transition"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}
