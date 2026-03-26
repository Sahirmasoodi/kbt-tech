import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const imageBlur = useTransform(scrollY, [0, 300], [0, 8]);

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-slate-100" ref={containerRef}>
      <motion.section
        className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="2.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="About background"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            filter: imageBlur,
          }}
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
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About{" "}
            <motion.span
              className="text-brand-400 inline-block"
              animate={{
                color: ["#60a5fa", "#34d399", "#fbbf24", "#60a5fa"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              KBT Fiesta
            </motion.span>{" "}
            Technologies
          </motion.h1>

          <motion.p
            className="text-slate-200 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We provide reliable IT services and digital solutions to businesses
            around the world, helping them grow, innovate, and operate securely
            in the modern digital landscape.
          </motion.p>
        </motion.div>

       
      </motion.section>

      <section className="py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-slate-50 rounded-3xl p-10 shadow-sm border border-slate-200 text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
             boxShadow: "0 30px 60px rgba(0, 0, 0, 0.08)",
            }}
            variants={floatingVariants}
            animate="animate"
          >
            <motion.p
              className="text-slate-600 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              KBT Fiesta Technologies is a UAE-based IT service provider delivering reliable
              technology solutions to businesses across the globe. Our team focuses on improving
              productivity, security, and digital transformation through managed IT services,
              cloud infrastructure, software licensing, and modern web development.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      <section className="pb-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
             boxShadow: "0 30px 60px rgba(0, 0, 0, 0.08)",
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition text-center cursor-pointer group overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-brand-400/5 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Our Mission
                </h2>
              </motion.div>

              <motion.p
                className="text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Deliver affordable, secure, and scalable IT solutions globally,
                helping businesses leverage technology to increase efficiency and
                achieve sustainable growth.
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-400"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
             boxShadow: "0 30px 60px rgba(0, 0, 0, 0.08)",
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition text-center cursor-pointer group overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-gray-400/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Our Vision
                </h2>
              </motion.div>

              <motion.p
                className="text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Become a trusted global technology partner for businesses of all
                sizes by delivering innovative IT solutions and exceptional service.
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gray-400"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}