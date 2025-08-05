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
    const { name, email, number, issue, description } = req.body;

    const mailOptions = {
      from: `"GHIT Repairs Form" <sanusijohn0@gmail.com>`,
      to: ADMIN_RECEIVER,
      subject: "New Repairs Form Inquiry",
      text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nIssue: ${issue}\nDescription: ${description}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending repair inquiry:", error);
    res.status(500).json({ error: "failed to send repair inquiry" });
  }
});

export default router;
