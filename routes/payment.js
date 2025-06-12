import express from "express";
import upload from "../middleware/uploads.js";
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

router.post("/", upload.single("receipt"), async (req, res) => {
  try {
    const { name, email, location } = req.body;
    const file = req.file;
    const mailOptions = {
      from: `"GHIT Payment Bot" <sanusijohn0@gmail.com>`,
      to: ADMIN_RECEIVER,
      subject: "New Payment Submission",
      text: `Name: ${name}\nEmail: ${email}\nLocation: ${
        location || "Not provided"
      }`,
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "payment info sent successfully" });
  } catch (error) {
    console.error("Error sending payment info:", error);
    res.status(500).json({ error: "failed to send payment info" });
  }
});

export default router;
