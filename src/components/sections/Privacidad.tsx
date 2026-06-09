import { FileText, Download } from "lucide-react";

export default function Privacidad() {
  return (
    <section id="privacidad" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Avisos de privacidad
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed text-center">
            Consulta nuestros documentos de privacidad y tratamiento de datos personales.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
              <FileText size={20} className="text-green-700" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">Aviso de privacidad simplificado</h3>
          </div>
          <div className="text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              <strong>Responsable:</strong> Biolily, con domicilio en México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>
            <p>
              <strong>Finalidades:</strong> Los datos personales que recabamos se utilizan para: (1) atender solicitudes de contacto y proyectos; (2) enviar información sobre nuestros servicios de restauración hídrica; (3) dar seguimiento a reportes del canal de integridad; y (4) cumplir obligaciones legales.
            </p>
            <p>
              <strong>Datos recabados:</strong> Nombre, correo electrónico, teléfono, organización y cargo. No recabamos datos personales sensibles.
            </p>
            <p>
              <strong>Transferencias:</strong> Sus datos no serán transferidos a terceros sin su consentimiento, salvo por obligación legal.
            </p>
            <p>
              <strong>Derechos ARCO:</strong> Puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición enviando un correo a <a href="mailto:ad.biolily@gmail.com" className="text-green-700 underline">ad.biolily@gmail.com</a>.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/docs/aviso-privacidad-integral.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            <Download size={16} />
            Descargar aviso de privacidad integral
          </a>
        </div>
      </div>
    </section>
  );
}
