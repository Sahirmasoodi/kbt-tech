import {
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  Server,
  Layers,
  Headphones,
  RefreshCcw,
  Lightbulb,
  MousePointerClick,
  Waypoints
} from "lucide-react";

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
      icon: Globe,
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
      icon: Smartphone,
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
      icon: Cloud,
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
      icon: ShieldCheck,
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
        "Backup for Entire Environment",
        "Hybrid IT (On-Prem + Cloud)",
      ],
      icon: Layers,
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
      icon: Server,
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
      icon: Headphones,
    },
    {
      title: "Migration & Hybrid IT Services",
      items: [
        "Email & data migration (cPanel, Gmail, Exchange)",
        "Hybrid Active Directory integration",
        "File server migration",
        "Cloud readiness assessments",
        "Smooth transition to the cloud",
      ],
      icon: Waypoints,
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
      icon: Lightbulb,
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
    <div>
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

      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group h-100 perspective-[1000px] cursor-pointer outline-none"
                tabIndex="0"
              >
                <div className="relative w-full h-full transition-all duration-700 transform-3d group-hover:transform-[rotateY(180deg)] group-focus:transform-[rotateY(180deg)] rounded-3xl shadow-md hover:shadow-2xl">
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-brand-50 flex items-center justify-center mb-6">
                      <Icon className="w-10 h-10 text-brand-600" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">
                      {service.title}
                    </h3>

                    <div className="flex items-center justify-center gap-2 text-sm text-slate-400 mt-auto">
                      <MousePointerClick className="w-4 h-4" />
                      <span>Hover or tap for details</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col overflow-hidden">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4 shrink-0">
                      {service.title}
                    </h3>

                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                      <div className="flex flex-col gap-3">
                        {service.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-brand-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(var(--brand-500),0.8)]"></div>
                            <span className="text-sm text-slate-300 leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto text-center mb-12 ">
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
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <p className="font-medium text-slate-700 inherit">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-100">
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
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg shadow-md transition"
            >
              <p className="text-slate-900 font-semibold">{industry}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
