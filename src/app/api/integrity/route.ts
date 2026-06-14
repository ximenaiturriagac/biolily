import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "ad.biolily@gmail.com";
const FROM = "no-reply@biolily.com.mx";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { reportType, relation, description, additionalInfo, contactEmail } = body;

    // Notificación a Biolily
    await resend.emails.send({
      from: `Canal de Integridad Biolily <${FROM}>`,
      to: TO,
      subject: "Nuevo reporte — Canal de Integridad Biolily",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

          <div style="background: #1a1a2e; padding: 28px 24px; text-align: center;">
            <img src="https://biolily.com.mx/logo-horizontal-biolily.svg" alt="Biolily"
              style="height: 44px; display: block; margin: 0 auto;" />
          </div>

          <div style="background: #fff8e1; padding: 10px 24px; border-bottom: 1px solid #ffe082;">
            <p style="margin: 0; color: #b45309; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
              🔒 Reporte confidencial — Canal de Integridad
            </p>
          </div>

          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px; width: 160px;">Tipo de reporte</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 14px; font-weight: bold;">${reportType || "No especificado"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px;">Relación</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 14px;">${relation || "No especificado"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px;">Correo de contacto</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #4a7c2f; font-size: 14px;">${contactEmail || "Anónimo"}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 18px; background: #f9f9f9; border-radius: 8px; border-left: 4px solid #b45309;">
              <p style="margin: 0 0 6px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Descripción</p>
              <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.7;">${description}</p>
            </div>

            ${additionalInfo ? `
            <div style="margin-top: 16px; padding: 18px; background: #f9f9f9; border-radius: 8px;">
              <p style="margin: 0 0 6px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Información adicional</p>
              <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.7;">${additionalInfo}</p>
            </div>` : ""}
          </div>

          <div style="padding: 20px 24px; border-top: 1px solid #eee; text-align: center;">
            <p style="margin: 0; color: #aaa; font-size: 11px;">
              Biolily · Canal de Integridad confidencial<br/>
              <a href="https://biolily.com.mx" style="color: #4a7c2f;">biolily.com.mx</a>
            </p>
          </div>
        </div>
      `,
    });

    // Autorespuesta al reportante si dejó correo
    if (contactEmail) {
      await resend.emails.send({
        from: `Biolily <${FROM}>`,
        to: contactEmail,
        subject: "Recibimos tu reporte — Biolily",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

            <div style="background: #ffffff; padding: 28px 24px; text-align: center; border-bottom: 1px solid #eee;">
              <img src="https://biolily.com.mx/logo-horizontal-biolily.svg" alt="Biolily"
                style="height: 44px; display: block; margin: 0 auto;" />
            </div>

            <div style="padding: 32px 24px 0 24px;">
              <p style="margin: 0 0 12px 0; color: #333; font-size: 16px;">Hola,</p>
              <p style="margin: 0; color: #555; font-size: 14px; line-height: 1.7;">
                Confirmamos que recibimos tu reporte a través del Canal de Integridad de Biolily.
                Lo revisaremos con confidencialidad y tomaremos las acciones correspondientes.
              </p>
            </div>

            <div style="padding: 24px;">
              <div style="padding: 18px; background: #fff8e1; border-radius: 8px; border-left: 4px solid #b45309;">
                <p style="margin: 0; color: #78350f; font-size: 13px; line-height: 1.7;">
                  Tu identidad y la información que compartiste serán tratadas con estricta confidencialidad conforme a nuestra política de integridad.
                </p>
              </div>
            </div>

            <div style="padding: 0 24px 32px 24px;">
              <p style="margin: 0 0 4px 0; color: #555; font-size: 14px;">Con compromiso,</p>
              <p style="margin: 0; color: #333; font-size: 14px; font-weight: bold;">El equipo de Biolily</p>
            </div>

            <div style="padding: 20px 24px; border-top: 1px solid #eee; text-align: center;">
              <p style="margin: 0; color: #aaa; font-size: 11px;">
                Biolily · Canal de Integridad confidencial<br/>
                <a href="https://biolily.com.mx" style="color: #4a7c2f;">biolily.com.mx</a>
              </p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
