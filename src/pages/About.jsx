export default function About() {
  return (
    <div className="bg-gray-100">
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src="2.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="About background"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-4xl px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            About KBT Fiesta Technologies
          </h1>

          <p className="text-gray-200 text-sm md:text-lg">
            We provide reliable IT services and digital solutions to businesses
            around the world, helping them grow, innovate, and operate securely
            in the modern digital landscape.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          <div className="bg-linear-to-br from-gray-900 to-black text-white rounded-xl p-8 md:p-10 flex items-center shadow-xl">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              KBT Fiesta Technologies is a UAE-based IT service provider
              delivering reliable technology solutions to businesses across the
              globe. Our team focuses on improving productivity, security, and
              digital transformation through managed IT services, cloud
              infrastructure, software licensing, and modern web development.
            </p>
          </div>

          <img
            src="6.jpg"
            className="w-full h-full min-h-80 object-cover rounded-xl shadow-xl"
            alt="company"
          />
        </div>
      </section>
      <section className=" px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-linear-to-br from-gray-900 to-black text-white rounded-xl p-8 flex flex-col justify-center shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-300">
              Deliver affordable, secure, and scalable IT solutions globally,
              helping businesses leverage technology to increase efficiency and
              achieve sustainable growth.
            </p>
          </div>

          <img
            src="1.png"
            className="w-full h-full min-h-80 object-cover rounded-xl shadow-xl"
            alt="mission"
          />

          <img
            src="6.jpg"
            className="w-full h-full min-h-80 object-cover rounded-xl shadow-xl"
            alt="vision"
          />
          <div className="bg-linear-to-br from-gray-900 to-black text-white rounded-xl p-8 flex flex-col justify-center shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-300">
              Become a trusted global technology partner for businesses of all
              sizes by delivering innovative IT solutions and exceptional
              service.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}