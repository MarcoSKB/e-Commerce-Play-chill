import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { emailValidator } from "@/src/libs/emailValidator";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, subject, html } = emailValidator.parse(body);

    const transpoter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "Marco <Marco.skb@mail.ru>",
      to: email,
      subject: subject,
      html: html,
    };

    await new Promise((resolve, reject) => {
      transpoter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    return Response.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
};
