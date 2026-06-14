"use client";
import { useState } from "react";
import { Send, Shield, AlertCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang].contact;

  const [form, setForm] = useState({
    name: "", org: "", cargo: "", email: "", phone: "", interest: "", message: "",
  });
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [sending, setSending] = useState(false);

  const [reportForm, setReportForm] = useState({
    reportType: "", relation: "", description: "", additionalInfo: "", contactEmail: "",
  });
  const [reportSent, setReportSent] = useState(false);
  const [reportError, setReportError] = useState(false);
  const [reportSending, setReportSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const handleReportChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setReportForm({ ...reportForm, [e.target.name]: e.target.value });
  };

  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setReportSending(true);
    setReportError(false);
    try {
      const res = await fetch("/api/integrity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reportType: reportForm.reportType,
          relation: reportForm.relation,
          description: reportForm.description,
          additionalInfo: reportForm.additionalInfo,
          contactEmail: reportForm.contactEmail,
        }),
      });
      if (!res.ok) throw new Error();
      setReportSent(true);
    } catch {
      setReportError(true);
    } finally {
      setReportSending(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ── Main contact form ── */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
              {t.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.heading1}{" "}
              <span className="text-green-700">{t.heading2}</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">{t.desc}</p>
          </div>

          {sent ? (
            <div className="max-w-2xl mx-auto flex items-center justify-center p-16 rounded-3xl bg-green-50 border border-green-200 text-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-green-800 mb-2">{t.successTitle}</h3>
                <p className="text-green-700 text-sm">{t.successDesc}</p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-5"
            >
              {sendError && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  <AlertCircle size={16} className="shrink-0" />
                  {t.errorMsg}{" "}
                  <a href="mailto:ad.biolily@gmail.com" className="underline font-medium">ad.biolily@gmail.com</a>.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.name} <span className="text-red-400">{t.required}</span>
                  </label>
                  <input
                    type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.org} <span className="text-red-400">{t.required}</span>
                  </label>
                  <input
                    type="text" name="org" required value={form.org} onChange={handleChange}
                    placeholder={t.orgPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.cargo}</label>
                  <input
                    type="text" name="cargo" value={form.cargo} onChange={handleChange}
                    placeholder={t.cargoPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.email} <span className="text-red-400">{t.required}</span>
                  </label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.phone}</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder={t.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.interest} <span className="text-red-400">{t.required}</span>
                  </label>
                  <select
                    name="interest" required value={form.interest} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm bg-white"
                  >
                    <option value="">{t.interestPlaceholder}</option>
                    {t.interests.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.message} <span className="text-red-400">{t.required}</span>
                </label>
                <textarea
                  name="message" required rows={5} value={form.message} onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
              >
                <Send size={16} />
                {sending ? t.sending : t.send}
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
                <p className="text-white font-bold text-lg leading-tight">{t.integrityTitle}</p>
                <p className="text-gray-400 text-xs">{t.integritySubtitle}</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-3">{t.integrityDesc}</p>
            <p className="text-gray-400 text-xs mb-8 italic">{t.integrityNote}</p>

            {reportSent ? (
              <div className="flex items-center justify-center p-10 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div>
                  <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center mx-auto mb-3">
                    <Shield size={20} className="text-green-400" />
                  </div>
                  <p className="text-white font-semibold mb-1">{t.reportSuccessTitle}</p>
                  <p className="text-gray-400 text-xs">{t.reportSuccessDesc}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-4" noValidate>
                {reportError && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-900/40 border border-red-700 text-red-300 text-sm">
                    <AlertCircle size={16} className="shrink-0" />
                    {t.reportErrorMsg}{" "}
                    <a href="mailto:ad.biolily@gmail.com" className="underline font-medium">ad.biolily@gmail.com</a>.
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.reportType}</label>
                    <select
                      name="reportType" value={reportForm.reportType} onChange={handleReportChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-900 outline-none transition-all text-sm"
                    >
                      <option value="">{t.reportTypePlaceholder}</option>
                      {t.reportTypes.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.relation}</label>
                    <select
                      name="relation" value={reportForm.relation} onChange={handleReportChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-900 outline-none transition-all text-sm"
                    >
                      <option value="">{t.reportTypePlaceholder}</option>
                      {t.relations.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.description}</label>
                  <textarea
                    name="description" required rows={4} value={reportForm.description} onChange={handleReportChange}
                    placeholder={t.descriptionPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-900 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.additionalInfo}</label>
                  <textarea
                    name="additionalInfo" rows={3} value={reportForm.additionalInfo} onChange={handleReportChange}
                    placeholder={t.additionalInfoPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-900 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.contactEmail}</label>
                  <input
                    type="email" name="contactEmail" value={reportForm.contactEmail} onChange={handleReportChange}
                    placeholder={t.contactEmailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-900 outline-none transition-all text-sm"
                  />
                </div>

                <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700">
                  <AlertCircle size={16} className="text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {lang === "es"
                      ? <>Si tienes evidencia que respalde tu reporte (imágenes, videos, documentos), envíala a <span className="text-amber-300 font-medium">ad.biolily@gmail.com</span> donde será tratada de forma confidencial.</>
                      : <>If you have evidence to support your report (images, videos, documents), send it to <span className="text-amber-300 font-medium">ad.biolily@gmail.com</span> where it will be handled confidentially.</>
                    }
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={reportSending}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gray-600 hover:bg-gray-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all"
                >
                  <Shield size={16} />
                  {reportSending ? t.sendingReport : t.sendReport}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
