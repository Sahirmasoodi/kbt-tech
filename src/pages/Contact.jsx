import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "7ebbe513-8d5d-4857-957d-8e8e945df9e2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true);
      setLoading(false);
      e.target.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      setLoading(false);
    }
  }

  // Animation variants
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const formFieldVariants = {
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

  return (
    <motion.section
      className="py-20 px-6 bg-slate-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's{" "}
            <motion.span
              className="text-brand-400 inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Talk
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-slate-600 mb-10 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Have a project in mind or need IT solutions? Reach out to us and
            we'll help you scale your business with the right technology.
          </motion.p>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 group cursor-pointer"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-200 transition"
                variants={contactIconVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-6 h-6" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-slate-900">Location</h4>
                <motion.p
                  className="text-slate-500"
                  whileHover={{ color: "rgb(59, 130, 246)" }}
                >
                  Dubai, United Arab Emirates
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 group cursor-pointer"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-200 transition"
                variants={contactIconVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: -360,
                }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-6 h-6" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-slate-900">Phone</h4>
                <motion.p
                  className="text-slate-500"
                  whileHover={{ color: "rgb(59, 130, 246)" }}
                >
                  +971 XXX XXXX
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 group cursor-pointer"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-200 transition"
                variants={contactIconVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-6 h-6" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-slate-900">Email</h4>
                <motion.p
                  className="text-slate-500"
                  whileHover={{ color: "rgb(59, 130, 246)" }}
                >
                  info@kbtfiesta.com
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-slate-50 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 overflow-hidden relative"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{
           boxShadow: "0 30px 60px rgba(0, 0, 0, 0.08)",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-brand-400/5 to-brand-600/5 opacity-0"
            animate={{
              opacity: focusedField ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send a Message
            </h2>

            <form onSubmit={submitForm} className="space-y-6">
              <motion.div
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition bg-white"
                  animate={{
                    boxShadow:
                      focusedField === "name"
                      
                        ? "0 0 0 3px rgba(0, 0, 0, 0.10)"
                        : "0 0 0 0px rgba(0, 0, 0, 0.20)",
                  }}
                  transition={{ duration: 0.2 }}
                  whileFocus={{
                    scale: 1.02,
                  }}
                />
              </motion.div>

              <motion.div
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition bg-white"
                  animate={{
                    boxShadow:
                      focusedField === "email"
                        ? "0 0 0 3px rgba(0, 0, 0, 0.08)"
                        : "0 0 0 0px rgba(0, 0, 0, 0.08)",
                  }}
                  transition={{ duration: 0.2 }}
                  whileFocus={{
                    scale: 1.02,
                  }}
                />
              </motion.div>

              <motion.div
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition bg-white resize-none"
                  animate={{
                    boxShadow:
                      focusedField === "message"
                        ? "0 0 0 3px rgba(0, 0, 0, 0.08)"
                        : "0 0 0 0px rgba(0, 0, 0, 0.08)",
                  }}
                  transition={{ duration: 0.2 }}
                  whileFocus={{
                    scale: 1.02,
                  }}
                />
              </motion.div>

              <motion.div
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
              >
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-600 text-white py-4 rounded-xl font-semibold hover:bg-brand-700 transition shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2 relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.20)",
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full text-slate-500"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <span>Sending...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center gap-2 text-slate-500"
                      >
                        <span>Send Message</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.6,
                        times: [0, 0.5, 1],
                      }}
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </motion.div>
                    <p className="text-emerald-600 font-medium">
                      Message sent successfully!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}