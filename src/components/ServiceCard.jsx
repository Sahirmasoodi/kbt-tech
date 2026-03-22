import { CheckCircle2 } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
}) {
  return (
    <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2">
    
      <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 text-brand-600 group-hover:scale-110 transition">
        {Icon && <Icon className="w-7 h-7" />}
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4">
        {title}
      </h3>

      <p className="text-slate-600 mb-6 grow">
        {description}
      </p>
      {features.length > 0 && (
        <ul className="space-y-3 mt-auto">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-slate-700"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}