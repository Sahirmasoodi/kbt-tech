import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    {
      title: "Website Development",
      description:
        "Professional websites and e-commerce platforms built for performance and scalability.",
    },
    {
      title: "Application Development",
      description:
        "Custom web applications and SaaS platforms tailored for modern businesses.",
    },
    {
      title: "Managed IT Support",
      description:
        "Remote IT helpdesk, device management and proactive monitoring.",
    },
    {
      title: "Cloud Infrastructure",
      description: "Secure cloud deployment and infrastructure management.",
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center text-white px-6"
        style={{
          backgroundImage: "url('/4.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full py-24">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Reliable Global IT Services for Modern Businesses
            </h1>

            <p className="text-gray-200 text-base md:text-lg mb-8">
              KBT Fiesta Technologies provides secure, scalable and affordable
              IT services for startups, small businesses and enterprises
              worldwide.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                Get Started
              </Link>

              <Link
                to="/services"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                Our Services
              </Link>
            </div>

            <div className="flex gap-8 md:gap-10 mt-10 text-sm text-gray-200 flex-wrap">
              <div>
                <p className="text-xl font-bold text-white">150+</p>
                <p>Projects</p>
              </div>

              <div>
                <p className="text-xl font-bold text-white">12+</p>
                <p>Clients</p>
              </div>

              <div>
                <p className="text-xl font-bold text-white">24/7</p>
                <p>Support</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">What We Deliver</h3>

              <ul className="space-y-3 text-gray-200">
                <li>✔ Cloud Infrastructure Solutions</li>
                <li>✔ Website & App Development</li>
                <li>✔ Managed IT Services</li>
                <li>✔ Enterprise Software Licensing</li>
                <li>✔ Cybersecurity Protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}