import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    if (!fromEmail) {
      throw new Error("FROM_EMAIL environment variable is not set.");
    }

    const data = await resend.emails.send({
      from: `Acme <${fromEmail}>`,
      to: [fromEmail], // Kendine gönderiyorsun, istersen buraya `email` de ekleyebilirsin
      subject: subject,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return Response.json({ success: false, error: error.message });
  }
}
