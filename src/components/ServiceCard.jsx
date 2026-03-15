export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition border border-gray-300">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
 