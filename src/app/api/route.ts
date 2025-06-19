import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, company, message } = body;

  try {
    await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email sending failed", err);
    return new Response(JSON.stringify({ error: "Email failed to send" }), {
      status: 500,
    });
  }
}
