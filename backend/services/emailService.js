import { Resend } from "resend";

import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async ({ email, token, firstName }) => {
  const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
  
  await resend.emails.send({
    from: "Yachay <no-reply@yachayedu.lat>",
    to: [email],
    subject: "Verificación de email",
    html: `
      <h2>Hola ${firstName}</h2>
      <p>Por favor verifica tu email haciendo click en el link siguiente:</p>
      <a href="${verificationUrl}">Email de verificación</a>
      <p>Este link expira en 1 hour.</p>
    `,
  });
};
