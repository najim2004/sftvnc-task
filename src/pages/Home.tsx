import StoreButtons from "@/components/home/StoreButtons";
import Features from "@/components/home/Features";
import AudienceSection from "@/components/home/AudienceSection";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute -left-1/5 -top-1/3 w-[600px] h-[900px] bg-[rgba(155,255,150,0.10)] rounded-[922px] -rotate-45 blur-[150px]" />
        </div>
        <div className="max-w-[1200px] mx-auto h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left">
          <div className="">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-800">
              All Your Jobs One Smart App
            </h1>
            <p className="mt-5 max-w-[495px] text-gray-600 text-lg">
              Built for business owners, employees, and clients—streamline
              scheduling, time tracking, and service management in one place.
            </p>
            <StoreButtons />
          </div>
          <div className="relative h-full hidden lg:block">
            <div className="image-fade-bottom">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b00fca91e997a96af1a39cc5b8a8381eaca9c1ce?width=1440"
                alt="Decorative gradient"
                className="h-full md:h-[656px] md:min-w-[720px] w-full pointer-events-none select-none"
              />
            </div>
            <div className="pointer-events-none absolute -right-20 -bottom-20 w-[600px] h-[900px] bg-[rgba(155,255,150,0.10)] rounded-[922px] -rotate-45 blur-[150px]" />
          </div>
        </div>
      </section>

      <Features />
      <AudienceSection />
      <Testimonials />
      <FAQ />
    </div>
  );
}
