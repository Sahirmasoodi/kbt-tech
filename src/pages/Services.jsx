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
        "Backup & disaster recovery"
      ]
    },
    {
      title: "Application Development",
      items: [
        "Custom web applications",
        "Mobile app development",
        "SaaS product development",
        "API integrations",
        "Software maintenance & upgrades"
      ]
    },
    {
      title: "Managed End-User IT Support",
      items: [
        "Remote helpdesk support",
        "Desktop & laptop troubleshooting",
        "Device management",
        "Software installation",
        "System updates & patch management",
        "IT onboarding for employees"
      ]
    },
    {
      title: "Email & Collaboration Services",
      items: [
        "Microsoft 365 setup",
        "Google Workspace setup",
        "Email migration",
        "Spam filtering",
        "Email security",
        "Backup & archiving"
      ]
    },
    {
      title: "Cloud Infrastructure Services",
      items: [
        "AWS cloud deployment",
        "Microsoft Azure infrastructure",
        "Google Cloud Platform setup",
        "Cloud migration",
        "Virtual server deployment",
        "Cloud backup solutions"
      ]
    },
    {
      title: "Endpoint Security & Protection",
      items: [
        "Antivirus deployment",
        "Endpoint monitoring",
        "Malware protection",
        "Threat detection",
        "Security patching"
      ]
    }
  ];

  const additionalServices = [
    "IT Infrastructure Consulting",
    "Digital Transformation Strategy",
    "Network Monitoring",
    "VPN & Firewall Configuration",
    "Backup & Disaster Recovery",
    "IT Asset Management",
    "Cybersecurity Audits",
    "Security Awareness Training"
  ];

  const industries = [
    "Startups",
    "Small & Medium Businesses",
    "Corporate Enterprises",
    "E-commerce Companies",
    "Healthcare",
    "Finance",
    "Education"
  ];

  return (
    <div>
      <section className="bg-gray-900 text-white py-28 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Our IT Services
        </h1>

        <p className="max-w-3xl mx-auto text-gray-300">
          KBT Fiesta Technologies provides secure and scalable IT solutions
          including website development, cloud infrastructure, managed IT
          support and cybersecurity services for businesses worldwide.
        </p>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>
      <section className=" py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            Additional IT Services
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-6 text-center shadow-sm"
              >
                {service}
              </div>
            ))}

          </div>

        </div>

      </section>
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {industries.map((industry, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                {industry}
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="bg-gray-900 text-white py-24 text-center px-6">

        <h2 className="text-3xl font-bold mb-6">
          Need Professional IT Services?
        </h2>

        <p className="text-gray-300 mb-8">
          Contact KBT Fiesta Technologies and let us help your business grow
          with secure and reliable technology solutions.
        </p>

        <a
          href="/contact"
          className="bg-gray-600 hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold"
        >
          Contact Our Team
        </a>

      </section>

    </div>
  );
}
