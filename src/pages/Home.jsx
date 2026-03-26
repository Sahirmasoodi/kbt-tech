import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Code, Shield, Server } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  // const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Stagger animation for services
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Floating animation
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Gradient shift animation
  const gradientVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Blur effect on scroll
  const imageBlur = useTransform(scrollY, [0, 300], [0, 10]);

  // Counter animation
  const CountUpAnimation = ({ from, to, duration = 2 }) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (!isInView) return;

      const steps = 60;
      const increment = (to - from) / steps;
      let current = from;
      let stepCount = 0;

      const timer = setInterval(() => {
        current += increment;
        stepCount++;
        if (stepCount >= steps) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, (duration * 1000) / steps);

      return () => clearInterval(timer);
    }, [isInView, from, to, duration]);

    return <span ref={ref}>{count}</span>;
  };

  return (
    <div ref={containerRef}>
      <motion.section
        className="relative min-h-screen flex items-center overflow-hidden bg-slate-100"
        style={{
          scale: heroScale,
        }}
      >
        <div className="absolute inset-0">
          <motion.img
            src="/4.webp"
            className="w-full h-full object-cover"
            alt="hero"
            style={{
              filter: imageBlur,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"
            animate={{
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Reliable Global{" "}
              <motion.span
                className="text-brand-400 inline-block"
                animate={{ color: ["#60a5fa", "#34d399", "#60a5fa"] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                IT Services
              </motion.span>{" "}
              for Modern Businesses
            </motion.h1>

            <motion.p
              className="text-lg text-slate-200 mb-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              KBT Fiesta Technologies provides secure, scalable and affordable
              IT services for startups, small businesses and enterprises
              worldwide.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    const offset = 80;
                    const top = el.offsetTop - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-700 transition flex items-center gap-2 shadow-lg shadow-brand-600/30"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 1, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <motion.button
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) {
                    const offset = 80;
                    const top = el.offsetTop - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-10 mt-12 text-sm text-slate-200 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { value: 150, label: "Projects", suffix: "+" },
                { value: 12, label: "Clients", suffix: "+" },
                { value: 24, label: "Support", suffix: "/7" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-2xl font-bold text-white">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="uppercase tracking-wider text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            variants={floatingVariants}
            animate="animate"
          >
            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                What We Deliver
              </h3>

              <ul className="space-y-4">
                {[
                  "Cloud Infrastructure Solutions",
                  "Website & App Development",
                  "Managed IT Services",
                  "Enterprise Software Licensing",
                  "Cybersecurity Protection",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-slate-200 flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="text-brand-400 text-lg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      ✔
                    </motion.span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="services"
        className="py-24 px-6 bg-slate-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
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
              Our Core Services
            </motion.h2>
            <motion.p
              className="text-slate-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We provide end-to-end IT solutions to help businesses scale,
              secure, and innovate in the digital era.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}