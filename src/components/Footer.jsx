import { Cpu, ArrowRight, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">KBT Fiesta</span>
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed">
              Global IT Services for Modern Businesses. We deliver scalable,
              secure, and high-performance digital solutions.
            </p>

            <div className="flex gap-4">
              {["facebook", "linkedin", "twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all"
                >
                  <Globe className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("home");
                    if (el)
                      window.scrollTo({
                        top: el.offsetTop - 80,
                        behavior: "smooth",
                      });
                  }}
                  className="hover:text-brand-400"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("about");
                    if (el)
                      window.scrollTo({
                        top: el.offsetTop - 80,
                        behavior: "smooth",
                      });
                  }}
                  className="hover:text-brand-400"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("services");
                    if (el)
                      window.scrollTo({
                        top: el.offsetTop - 80,
                        behavior: "smooth",
                      });
                  }}
                  className="hover:text-brand-400"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el)
                      window.scrollTo({
                        top: el.offsetTop - 80,
                        behavior: "smooth",
                      });
                  }}
                  className="hover:text-brand-400"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#" className="hover:text-brand-400">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400">
                  App Development
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm">
              Get updates, insights, and tech news.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
              <button className="bg-brand-600 px-4 py-2 rounded-lg hover:bg-brand-700 transition">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <p>© 2026 KBT Fiesta Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
