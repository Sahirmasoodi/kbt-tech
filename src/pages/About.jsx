export default function About() {
  return (
    <div className="bg-slate-100">

      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="2.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="About background"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative max-w-3xl px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About <span className="text-brand-400">KBT Fiesta</span> Technologies
          </h1>

          <p className="text-slate-200 text-base md:text-lg leading-relaxed">
            We provide reliable IT services and digital solutions to businesses
            around the world, helping them grow, innovate, and operate securely
            in the modern digital landscape.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-50 rounded-3xl p-10 shadow-sm border border-slate-200 text-center hover:shadow-xl transition">
            <p className="text-slate-600 leading-relaxed text-lg">
              KBT Fiesta Technologies is a UAE-based IT service provider delivering reliable
              technology solutions to businesses across the globe. Our team focuses on improving
              productivity, security, and digital transformation through managed IT services,
              cloud infrastructure, software licensing, and modern web development.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Deliver affordable, secure, and scalable IT solutions globally,
              helping businesses leverage technology to increase efficiency and
              achieve sustainable growth.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Our Vision
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Become a trusted global technology partner for businesses of all
              sizes by delivering innovative IT solutions and exceptional service.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}