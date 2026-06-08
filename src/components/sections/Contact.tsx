"use client";
import { useState } from "react";
import { Send, Mail, MapPin, Link2 } from "lucide-react";

const interestOptions = [
  { value: "proyecto", label: "Proyecto de restauración" },
  { value: "inversion", label: "Inversión" },
  { value: "alianza", label: "Alianza estratégica" },
  { value: "prensa", label: "Prensa y medios" },
  { value: "investigacion", label: "Investigación académica" },
  { value: "otro", label: "Otro" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar con servicio de formulario real (Formspree, EmailJS, API propia, etc.)
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
            Contacto
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hablemos de <span className="text-green-700">restauración hídrica</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Construyamos juntos soluciones para restaurar nuestros cuerpos de agua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info panel */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-700 to-green-900 text-white">
              <h3 className="font-display text-xl font-bold mb-4">Biolily</h3>
              <p className="text-green-200 text-sm leading-relaxed mb-6 italic">
                "Confiamos en la infinita sabiduría de la naturaleza."
              </p>
              <div className="space-y-3">
                {/* TODO: Reemplazar con correo oficial */}
                <a
                  href="mailto:contacto@biolily.com"
                  className="flex items-center gap-3 text-green-200 hover:text-white transition-colors text-sm"
                >
                  <Mail size={15} className="text-green-400 shrink-0" />
                  contacto@biolily.com
                </a>
                <div className="flex items-center gap-3 text-green-200 text-sm">
                  <MapPin size={15} className="text-green-400 shrink-0" />
                  Valle de Bravo, Estado de México
                </div>
                <a
                  href="https://es.linkedin.com/posts/fito-colmenas-by-biolily-innovations_biolilyinnovations-fitocolmenas-innovaci%C3%B3nambiental-activity-7299983063822839809-qDG2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-green-200 hover:text-white transition-colors text-sm"
                >
                  <Link2 size={15} className="text-green-400 shrink-0" />
                  LinkedIn de Fito-colmenas
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
              <h4 className="font-semibold text-blue-900 text-sm mb-3">¿Qué tipo de proyecto tienes en mente?</h4>
              <ul className="space-y-2">
                {interestOptions.map(({ label }) => (
                  <li key={label} className="flex items-center gap-2 text-blue-700 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="h-full flex items-center justify-center p-12 rounded-3xl bg-green-50 border border-green-200 text-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-green-800 mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-green-700 text-sm">
                    Gracias por contactar a Biolily. Nos comunicaremos contigo a la brevedad.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nombre <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Organización
                    </label>
                    <input
                      type="text"
                      name="org"
                      value={form.org}
                      onChange={handleChange}
                      placeholder="Empresa u organización"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Correo electrónico <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+52 (000) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tipo de interés <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="interest"
                    required
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm bg-white"
                  >
                    <option value="">Selecciona una opción</option>
                    {interestOptions.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mensaje <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto, cuerpo de agua, necesidad o pregunta..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  <Send size={16} />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
