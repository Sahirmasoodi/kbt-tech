import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-10 mb-10 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center">
                <img src="main.png" />
              </div>
              <span className="text-lg font-semibold">KBT Technologies</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Global IT Services for modern businesses. We build scalable,
              secure and high-performance digital solutions.
            </p>

            <div className="flex gap-3 mt-5">
              {["facebook", "linkedin", "twitter"].map((s, i) => (
                <motion.a
                  key={s}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition"
                >
                  <Globe className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-base mb-4">Services</h4>

            <div className="grid grid-cols-2 gap-y-3 text-sm text-slate-400">
              {[
                "Cloud Solutions",
                "Cybersecurity",
                "Web Development",
                "App Development",
              ].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ x: 4 }}
                  className="hover:text-brand-400 transition"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-linear-to-r from-transparent via-slate-800 to-transparent mb-6" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-3"
        >
          <p>© 2026 KBT Fiesta Technologies</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}