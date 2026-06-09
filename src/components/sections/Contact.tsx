"use client";
import { useState } from "react";
import { Send, Shield } from "lucide-react";

const interestOptions = [
  { value: "proyecto", label: "Proyecto" },
  { value: "alianza", label: "Alianza" },
  { value: "gobierno", label: "Gobierno" },
  { value: "empresa", label: "Empresa" },
  { value: "investigacion", label: "Investigación" },
  { value: "prensa", label: "Prensa" },
  { value: "otro", label: "Otro" },
];

const reportTypeOptions = [
  { value: "etica", label: "Ética e integridad" },
  { value: "conflicto", label: "Conflicto de interés" },
  { value: "informacion", label: "Uso indebido de información" },
  { value: "trato", label: "Trato inadecuado" },
  { value: "incumplimiento", label: "Incumplimiento" },
  { value: "otro", label: "Otro" },
];

const relationOptions = [
  { value: "colaborador", label: "Colaborador" },
  { value: "proveedor", label: "Proveedor" },
  { value: "aliado", label: "Aliado" },
  { value: "comunidad", label: "Comunidad" },
  { value: "otro", label: "Otro" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    cargo: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const [reportForm, setReportForm] = useState({
    reportType: "",
    relation: "",
    description: "",
    additionalInfo: "",
    contactEmail: "",
    anonymous: false,
  });
  const [reportSent, setReportSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS — configure these values in your EmailJS dashboard (emailjs.com)
    // TODO: Replace with your actual ServiceID, TemplateID, and PublicKey
    // Service must forward to: ad.biolily@gmail.com
    // Template variables: {{name}}, {{org}}, {{cargo}}, {{email}}, {{phone}}, {{interest}}, {{message}}
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        "YOUR_SERVICE_ID",    // TODO: replace with EmailJS service ID
        "YOUR_TEMPLATE_ID",   // TODO: replace with EmailJS template ID
        {
          name: form.name,
          org: form.org,
          cargo: form.cargo,
          email: form.email,
          phone: form.phone,
          interest: form.interest,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"     // TODO: replace with EmailJS public key
      );
    } catch {
      // Silent fail in dev — remove in production or add error state
    }
    setSent(true);
  };

  const handleReportChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    if (target.type === "checkbox") {
      setReportForm({ ...reportForm, [target.name]: target.checked });
    } else {
      setReportForm({ ...reportForm, [target.name]: target.value });
    }
  };

  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS — canal de integridad
    // TODO: Replace with your actual ServiceID, TemplateID, and PublicKey
    // Use a separate template for integrity reports forwarding to: ad.biolily@gmail.com
    // Template variables: {{reportType}}, {{relation}}, {{description}}, {{additionalInfo}}, {{contactEmail}}, {{anonymous}}
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        "YOUR_SERVICE_ID",         // TODO: replace with EmailJS service ID
        "YOUR_INTEGRITY_TEMPLATE_ID", // TODO: replace with integrity template ID
        {
          reportType: reportForm.reportType,
          relation: reportForm.relation,
          description: reportForm.description,
          additionalInfo: reportForm.additionalInfo,
          contactEmail: reportForm.anonymous ? "Anónimo" : reportForm.contactEmail,
          anonymous: reportForm.anonymous ? "Sí" : "No",
        },
        "YOUR_PUBLIC_KEY"          // TODO: replace with EmailJS public key
      );
    } catch {
      // Silent fail in dev
    }
    setReportSent(true);
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ── Main contact form ── */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
              Contacto
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Exploremos oportunidades para{" "}
              <span className="text-green-700">restaurar el agua</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Si tu organización busca generar beneficios ambientales y volumétricos medibles
              mediante soluciones basadas en la naturaleza, nos encantaría conversar.
            </p>
          </div>

          {sent ? (
            <div className="max-w-2xl mx-auto flex items-center justify-center p-16 rounded-3xl bg-green-50 border border-green-200 text-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-green-800 mb-2">
                  Mensaje enviado
                </h3>
                <p className="text-green-700 text-sm">
                  Gracias por contactar a Biolily. Nos comunicaremos contigo a la brevedad.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-5"
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
                    Organización <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="org"
                    required
                    value={form.org}
                    onChange={handleChange}
                    placeholder="Empresa u organización"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Cargo</label>
                  <input
                    type="text"
                    name="cargo"
                    value={form.cargo}
                    onChange={handleChange}
                    placeholder="Tu cargo o rol"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                  />
                </div>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

        {/* ── Integrity channel ── */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 sm:p-10 border border-gray-700">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Shield size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">
                  Canal de integridad y confianza
                </p>
                <p className="text-gray-400 text-xs">Voz con Valor Biolily</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              En Biolily creemos que la confianza, la transparencia y el respeto son fundamentales
              para construir proyectos de restauración hídrica de largo plazo. Este canal está
              disponible para colaboradores, aliados, proveedores, comunidades y cualquier persona
              que desee reportar de buena fe una inquietud relacionada con ética, integridad,
              posibles conflictos de interés, uso indebido de información, trato inadecuado,
              incumplimientos o situaciones que puedan afectar la confianza en nuestros proyectos.
            </p>
            <p className="text-gray-400 text-xs mb-8 italic">
              Los reportes serán tratados con seriedad, confidencialidad y respeto.
            </p>

            {reportSent ? (
              <div className="flex items-center justify-center p-10 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div>
                  <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center mx-auto mb-3">
                    <Shield size={20} className="text-green-400" />
                  </div>
                  <p className="text-white font-semibold mb-1">Reporte enviado</p>
                  <p className="text-gray-400 text-xs">
                    Gracias por comunicarte con nosotros. Tu reporte ha sido recibido.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Tipo de reporte
                    </label>
                    <select
                      name="reportType"
                      value={reportForm.reportType}
                      onChange={handleReportChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-900 outline-none transition-all text-sm"
                    >
                      <option value="">Selecciona</option>
                      {reportTypeOptions.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Relación con Biolily
                    </label>
                    <select
                      name="relation"
                      value={reportForm.relation}
                      onChange={handleReportChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-900 outline-none transition-all text-sm"
                    >
                      <option value="">Selecciona</option>
                      {relationOptions.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Descripción de la situación
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    value={reportForm.description}
                    onChange={handleReportChange}
                    placeholder="Describe la situación con el mayor detalle posible..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-900 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Información adicional (opcional)
                  </label>
                  <textarea
                    name="additionalInfo"
                    rows={3}
                    value={reportForm.additionalInfo}
                    onChange={handleReportChange}
                    placeholder="Cualquier detalle adicional que consideres relevante..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-900 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Correo de contacto (opcional)
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={reportForm.contactEmail}
                    onChange={handleReportChange}
                    placeholder="Para seguimiento (si lo deseas)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-900 outline-none transition-all text-sm"
                  />
                </div>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="anonymous"
                    checked={reportForm.anonymous}
                    onChange={handleReportChange}
                    className="w-4 h-4 rounded border-gray-600 bg-gray-800 accent-green-500"
                  />
                  <span className="text-gray-300 text-sm">
                    Prefiero mantenerme anónimo
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-full transition-all"
                >
                  <Shield size={16} />
                  Enviar reporte
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
