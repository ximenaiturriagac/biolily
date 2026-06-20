import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "ad.biolily@gmail.com";
const FROM = "no-reply@biolily.com.mx";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, org, cargo, email, phone, interest, message } = body;

    // Notificación a Biolily
    await resend.emails.send({
      from: `Contacto Biolily <${FROM}>`,
      to: TO,
      replyTo: email,
      subject: `Alguien te está contactando — ${name}${cargo ? `, ${cargo}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

          <div style="background: #ffffff; padding: 28px 24px; text-align: center; border-bottom: 1px solid #eee;">
            <img src="https://www.biolily.com.mx/logo-horizontal-biolily.svg" alt="Biolily"
              style="height: 44px; display: block; margin: 0 auto;" />
          </div>

          <div style="background: #f9f9f9; padding: 10px 24px; border-bottom: 1px solid #eee;">
            <p style="margin: 0; color: #4a7c2f; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
              📩 Nuevo mensaje de contacto
            </p>
          </div>

          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px; width: 140px;">Nombre</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 14px; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px;">Organización</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 14px;">${org}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px;">Cargo</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 14px;">${cargo || "No especificado"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px;">Correo</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #4a7c2f; font-size: 14px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px;">Teléfono</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 14px;">${phone || "No especificado"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 13px;">Interés</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 14px;">${interest}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 18px; background: #f9f9f9; border-radius: 8px; border-left: 4px solid #4a7c2f;">
              <p style="margin: 0 0 6px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Mensaje</p>
              <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.7;">${message}</p>
            </div>

            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}?subject=Biolily | Seguimiento a tu consulta sobre ${interest}"
                style="display: inline-block; background: #4a7c2f; color: #ffffff; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-size: 14px; font-weight: bold;">
                Responder a ${name}
              </a>
            </div>
          </div>

          <div style="padding: 20px 24px; border-top: 1px solid #eee; text-align: center;">
            <p style="margin: 0; color: #aaa; font-size: 11px;">
              Biolily · Tecnología ambiental · Valle de Bravo, México<br/>
              <a href="https://www.biolily.com.mx" style="color: #4a7c2f;">biolily.com.mx</a>
            </p>
          </div>
        </div>
      `,
    });

    // Autorespuesta al usuario
    await resend.emails.send({
      from: `Biolily <${FROM}>`,
      to: email,
      subject: "Recibimos tu mensaje — Biolily",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

          <div style="background: #ffffff; padding: 28px 24px; text-align: center; border-bottom: 1px solid #eee;">
            <img src="https://www.biolily.com.mx/logo-horizontal-biolily.svg" alt="Biolily"
              style="height: 44px; display: block; margin: 0 auto;" />
          </div>

          <div style="padding: 32px 24px 0 24px;">
            <p style="margin: 0 0 12px 0; color: #333; font-size: 16px;">Hola <strong>${name}</strong>,</p>
            <p style="margin: 0; color: #555; font-size: 14px; line-height: 1.7;">
              Gracias por contactarnos. Recibimos tu mensaje y nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>

          <div style="padding: 24px;">
            <div style="padding: 18px; background: #f9f9f9; border-radius: 8px; border-left: 4px solid #4a7c2f;">
              <p style="margin: 0 0 6px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Tu mensaje</p>
              <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.7;">${message}</p>
            </div>
          </div>

          <div style="padding: 0 24px 32px 24px;">
            <p style="margin: 0 0 4px 0; color: #555; font-size: 14px;">Con gusto,</p>
            <p style="margin: 0; color: #333; font-size: 14px; font-weight: bold;">El equipo de Biolily</p>
          </div>

          <div style="padding: 20px 24px; border-top: 1px solid #eee; text-align: center;">
            <p style="margin: 0; color: #aaa; font-size: 11px;">
              Biolily · Tecnología ambiental · Valle de Bravo, México<br/>
              <a href="https://www.biolily.com.mx" style="color: #4a7c2f;">biolily.com.mx</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
