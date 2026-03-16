export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-linear-to-br from-gray-900 to-black text-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition border border-gray-800">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
}