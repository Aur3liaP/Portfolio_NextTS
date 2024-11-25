import { EmailTemplate } from "../../ui/contact/email-template";
import { Resend } from "resend";
import { NextRequest } from "next/server";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailUser = process.env.EMAIL_USER as string;

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: [emailUser],
      subject: "Contact Portfolio",
      react: EmailTemplate({
        message: `${message}`,
        email: `${email}`,
        name: `${name}`,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error }, { status: 500 });
  }
}
