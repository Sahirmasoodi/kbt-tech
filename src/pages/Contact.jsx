import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "e531d982-107d-41a8-bead-6eabefeb4f5b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
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
    <section className="py-20 px-6 h-[60vh]">
      <div className="max-w-2xl mx-auto bg-white shadow-lg border rounded-lg p-10">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Contact Us
        </h1>

        <form onSubmit={submitForm} className="flex flex-col gap-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-center">
              Message sent successfully!
            </p>
          )}

        </form>
      </div>
    </section>
  );
}
