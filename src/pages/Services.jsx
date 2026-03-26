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
  Waypoints,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Services() {
  const [flipped, setFlipped] = useState({});

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const additionalItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const industriyVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <motion.section
        className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="3.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="services"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="relative max-w-3xl px-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our{" "}
            <motion.span
              className="text-brand-400 inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              IT Services
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-slate-200 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Secure, scalable IT solutions including cloud infrastructure,
            development, managed IT support, and cybersecurity.
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.section
        className="py-24 px-6 bg-slate-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group h-100 cursor-pointer"
                onClick={() =>
                  setFlipped((prev) => ({
                    ...prev,
                    [index]: !prev[index],
                  }))
                }
                onMouseEnter={() =>
                  setFlipped((prev) => ({
                    ...prev,
                    [index]: true,
                  }))
                }
                onMouseLeave={() =>
                  setFlipped((prev) => ({
                    ...prev,
                    [index]: false,
                  }))
                }
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{
                    rotateY: flipped[index] ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  style={{
                    perspective: 1000,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 w-full h-full bg-white border border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-md hover:shadow-2xl transition-shadow"
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                    animate={{
                      boxShadow: flipped[index]
                        ? "0 0 0 0px rgba(59, 130, 246, 0)"
                        : "0 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-2xl bg-brand-50 flex items-center justify-center mb-6"
                      animate={{
                        scale: flipped[index] ? 0.9 : 1,
                        rotateZ: flipped[index] ? 10 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        animate={{
                          rotate: flipped[index] ? 360 : 0,
                        }}
                        transition={{
                          duration: 0.6,
                        }}
                      >
                        <Icon className="w-10 h-10 text-brand-600" />
                      </motion.div>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">
                      {service.title}
                    </h3>

                    <motion.div
                      className="flex items-center justify-center gap-2 text-sm text-slate-400 mt-auto"
                      animate={{
                        opacity: flipped[index] ? 0 : 1,
                        y: flipped[index] ? -10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <MousePointerClick className="w-4 h-4" />
                      <span>Hover or tap for details</span>
                    </motion.div>
                  </motion.div>

                  {/* Back Side */}
                  <motion.div
                    className="absolute inset-0 w-full h-full bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col overflow-hidden shadow-2xl"
                    style={{
                      backfaceVisibility: "hidden",
                      rotateY: 180,
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4 shrink-0">
                      {service.title}
                    </h3>

                    <motion.div
                      className="flex-1 overflow-y-auto pr-2 custom-scrollbar"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: flipped[index] ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2,
                      }}
                    >
                      <div className="flex flex-col gap-3">
                        {service.items.map((item, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: flipped[index] ? 1 : 0,
                              x: flipped[index] ? 0 : -10,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: 0.2 + i * 0.05,
                            }}
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full bg-brand-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(var(--brand-500),0.8)]"
                              animate={{
                                scale: flipped[index] ? 1 : 0.5,
                              }}
                              transition={{ duration: 0.3 }}
                            />
                            <span className="text-sm text-slate-300 leading-relaxed">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Additional Services Section */}
      <motion.section
        className="py-24 px-6 bg-slate-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Additional IT Services
          </motion.h2>
          <motion.p
            className="text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Extended support and consulting services tailored for your business.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              variants={additionalItemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              <motion.p
                className="font-medium text-slate-700 inherit"
                animate={{
                  color: "inherit",
                }}
              >
                {service}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="py-24 px-6 bg-slate-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-7xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            className="text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Supporting businesses across multiple industries with tailored IT
            solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={industriyVariants}
              whileHover={{
                scale: 1.08,
                y: -8,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.08)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg shadow-md transition cursor-pointer"
            >
              <motion.p
                className="text-slate-900 font-semibold"
                animate={{
                  scale: 1,
                }}
              >
                {industry}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}