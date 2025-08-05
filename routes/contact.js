import express from "express";
import nodemailer from "nodemailer";
import { BREVO_USER, BREVO_PASSWORD, ADMIN_RECEIVER } from "../config/env.js";

const router = express.Router();
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,

  auth: {
    user: BREVO_USER,
    pass: BREVO_PASSWORD,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
      from: `"GHIT Contact Form" <sanusijohn0@gmail.com>`,
      to: ADMIN_RECEIVER,
      subject: "New Contact Form message",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending contact message:", error);
    res.status(500).json({ error: "failed to send contact message" });
  }
});

export default router;
