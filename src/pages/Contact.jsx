import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  return (
    <section className="py-20 px-6 bg-slate-100">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let’s Talk
          </h1>

          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Have a project in mind or need IT solutions? Reach out to us and
            we’ll help you scale your business with the right technology.
          </p>

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Location</h4>
                <p className="text-slate-500">Dubai, United Arab Emirates</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Phone</h4>
                <p className="text-slate-500">+971 XXX XXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Email</h4>
                <p className="text-slate-500">info@kbtfiesta.com</p>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Send a Message
          </h2>

          <form onSubmit={submitForm} className="space-y-6">

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-600 text-white bg-slate-800 py-4 rounded-xl font-semibold hover:bg-brand-700 transition shadow-lg shadow-brand-600/20"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-emerald-600 text-center font-medium">
                 Message sent successfully!
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}