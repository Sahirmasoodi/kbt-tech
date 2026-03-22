import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Code, Shield, Server } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Professional websites and e-commerce platforms built for performance and scalability.",
    },
    {
      icon: Server,
      title: "Application Development",
      description:
        "Custom web applications and SaaS platforms tailored for modern businesses.",
    },
    {
      icon: Shield,
      title: "Managed IT Support",
      description:
        "Remote IT helpdesk, device management and proactive monitoring.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Secure cloud deployment and infrastructure management.",
    },
  ];

  return (
    <div>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-100 ">
        <div className="absolute inset-0">
          <img
            src="/4.webp"
            className="w-full h-full object-cover"
            alt="hero"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
              Reliable Global{" "}
              <span className="text-brand-400">IT Services</span> for Modern
              Businesses
            </h1>

            <p className="text-lg text-slate-200 mb-10 max-w-xl">
              KBT Fiesta Technologies provides secure, scalable and affordable
              IT services for startups, small businesses and enterprises
              worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    const offset = 80;
                    const top = el.offsetTop - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-700 transition flex items-center gap-2 shadow-lg shadow-brand-600/30"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) {
                    const offset = 80;
                    const top = el.offsetTop - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition"
              >
                Our Services
              </button>
            </div>
            <div className="flex gap-10 mt-12 text-sm text-slate-200 flex-wrap">
              <div>
                <p className="text-2xl font-bold text-white">150+</p>
                <p className="uppercase tracking-wider text-xs">Projects</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">12+</p>
                <p className="uppercase tracking-wider text-xs">Clients</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="uppercase tracking-wider text-xs">Support</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">
                What We Deliver
              </h3>

              <ul className="space-y-4 text-slate-200">
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

      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-slate-600">
              We provide end-to-end IT solutions to help businesses scale,
              secure, and innovate in the digital era.
            </p>
          </div>

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
