function Features() {
  const items = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/846856cf53c5d2796d07ae1b9eaa6cd707dfd227?width=86",
      title: "Easy Service Booking",
      desc: "Streamlined booking process for clients with service catalogs and availability.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8a49426967ed3f8c02136ec60120d8b51e539ce3?width=86",
      title: "Real-Time Tracking",
      desc: "Monitor job progress, employee hours, and project timelines with live updates.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/21618a5967d30475bdd30391e0c712f92e6398bf?width=86",
      title: "Performance Analytics",
      desc: "Comprehensive reporting and insights to improve business operations and efficiency.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/5e4e890693d5a88287de94ad6fdcabb0c280b420?width=86",
      title: "Secure & Reliable",
      desc: "Enterprise-grade security with 99.9% uptime and data protection.",
    },
  ];
  return (
    <section
      id="features"
      className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((f) => (
          <div
            key={f.title}
            className="flex flex-col text-center items-center md:text-left md:items-start gap-4"
          >
            <img src={f.icon} alt="" className="h-10 w-10" />
            <div>
              <h3 className="font-semibold text-gray-800">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-6">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
