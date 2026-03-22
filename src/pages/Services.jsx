import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Website Development & Management",
      items: [
        "Business websites",
        "E-commerce websites",
        "Website maintenance",
        "SEO optimization",
        "Hosting setup",
        "Performance optimization",
        "Backup & disaster recovery",
        "Security",
      ],
    },
    {
      title: "Application Development",
      items: [
        "Custom web applications",
        "Mobile app development",
        "SaaS product development",
        "API integrations",
        "Software maintenance & upgrades",
      ],
    },
    {
      title: "Cloud Infrastructure Services",
      items: [
        "AWS cloud deployment",
        "Microsoft Azure infrastructure",
        "Google Cloud Platform setup",
        "Cloud migration",
        "Virtual server deployment",
        "Cloud backup solutions",
      ],
    },
    {
      title: "Endpoint Security & Protection",
      items: [
        "Antivirus deployment",
        "Endpoint monitoring",
        "Malware protection",
        "Threat detection",
        "Security patching",
      ],
    },

    {
      title: "Cloud & Microsoft 365 Services",
      items: [
        "Microsoft 365 Email Setup & Management",
        "Email Backup & Data Protection",
        "Identity & Access Management (Entra ID)",
        "Device Management (Intune & MDM)",
        "Endpoint Security & Zero Trust",
        "Virtual Desktop Infrastructure (VDI)",
        "Backup for Entire Environment (Not Just Email)",
        "Hybrid IT (On-Prem + Cloud)",
      ],
    },

    {
      title: "Cloud Services (SaaS, PaaS, IaaS)",
      items: [
        "SaaS (Software as a Service)",
        "PaaS (Platform as a Service)",
        "IaaS (Infrastructure as a Service)",
        "Security & Compliance",
        "Migration Services",
      ],
    },

    {
      title: "Managed IT Support (MSP Services)",
      items: [
        "Helpdesk support (L1 / L2 / L3)",
        "Remote troubleshooting",
        "System monitoring & maintenance",
        "SLA-based support plans",
        "Full IT support for your organization",
      ],
    },

    {
      title: "Migration & Hybrid IT Services",
      items: [
        "Email & data migration (cPanel, Gmail, Exchange)",
        "Hybrid Active Directory integration with Microsoft Entra ID",
        "File server migration",
        "Cloud readiness assessments",
        "Smooth transition to the cloud",
      ],
    },

    {
      title: "IT Consulting & Strategy",
      items: [
        "IT infrastructure assessment",
        "Security posture evaluation",
        "Cloud strategy & roadmap",
        "Digital transformation consulting",
        "Align IT with business goals",
      ],
    },
  ];

  const additionalServices = [
    "IT Infrastructure Consulting",
    "Digital Transformation Strategy",
    "Network Monitoring",
    "VPN & Firewall Configuration",
    "Backup & Disaster Recovery",
    "Cybersecurity Audits",
    "Security Awareness Training",
  ];

  const industries = [
    "Startups",
    "Small & Medium Businesses",
    "Corporate Enterprises",
    "E-commerce Companies",
    "Healthcare",
    "Finance",
    "Education",
  ];

  return (
    <div className="">
      <section className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="3.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="services"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative max-w-3xl px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-brand-400">IT Services</span>
          </h1>

          <p className="text-slate-200 text-lg">
            Secure, scalable IT solutions including cloud infrastructure,
            development, managed IT support, and cybersecurity.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition flex flex-col"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              <ul className="space-y-3 text-slate-600">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Additional IT Services
          </h2>
          <p className="text-slate-600">
            Extended support and consulting services tailored for your business.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition"
            >
              <p className="text-slate-800 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-slate-600">
            Supporting businesses across multiple industries with tailored IT
            solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl transition"
            >
              <p className="text-slate-900 font-semibold">{industry}</p>
            </div>
          ))}
        </div>
      </section>
      {/* 
      <section className="bg-brand-900  py-24 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Need Professional IT Services?
        </h2>

        <p className="text-brand-200 mb-8 max-w-xl mx-auto">
          Contact KBT Fiesta Technologies and let us help your business grow
          with secure and reliable technology solutions.
        </p>

        <Link
          to="/contact"
          className="bg-slate-200 text-brand-900 px-8 py-4 rounded-full font-semibold hover:bg-brand-50 transition"
        >
          Contact Our Team
        </Link>
      </section> */}
    </div>
  );
}
