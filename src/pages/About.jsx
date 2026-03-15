export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About KBT Fiesta Technologies
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide reliable IT services and digital solutions to businesses
            around the world, helping them grow, innovate, and operate securely
            in the modern digital landscape.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-10 mb-16">
          <p className="text-gray-600 leading-relaxed text-lg">
            KBT Fiesta Technologies is a UAE-based IT service provider
            delivering reliable technology solutions to businesses across the
            globe. Our team focuses on improving productivity, security, and
            digital transformation through managed IT services, cloud
            infrastructure, software licensing, and modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-xl p-8 border hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Deliver affordable, secure, and scalable IT solutions globally,
              helping businesses leverage technology to increase efficiency and
              achieve sustainable growth.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8 border hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              Become a trusted global technology partner for businesses of all
              sizes by delivering innovative IT solutions and exceptional
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
