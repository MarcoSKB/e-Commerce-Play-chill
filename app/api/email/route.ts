import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { emailValidator } from "@/src/libs/emailValidator";

const APIkey = process.env.SENDGRID_API_KEY;

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, subject, html } = emailValidator.parse(body);

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 465,
      secure: true,
      auth: {
        user: "apikey",
        pass: APIkey,
      },
    });

    await transporter.sendMail({
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
