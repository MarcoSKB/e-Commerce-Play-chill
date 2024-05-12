import { NextRequest } from "next/server";
import { emailValidator } from "@/src/libs/emailValidator";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey("SG." + process.env.SENDGRID_API_KEY!);

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, subject, html } = emailValidator.parse(body);

    sgMail.send({
      from: "serikbaev03beka@gmail.com",
      to: email,
      subject: subject,
      html: html,
    });

    return Response.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
};
