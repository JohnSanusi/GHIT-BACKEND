import express from "express";
import upload from "../middleware/uploads.js";
import nodemailer from "nodemailer";
import { GMAIL_USER, GMAIL_PASSWORD, ADMIN_RECEIVER } from "../config/env.js";

const router = express.Router();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD,
  },
});

router.post("/", upload.single("receipt"), async (req, res) => {
  try {
    const { name, email, location } = req.body;

    const mailOptions = {
      from: `"GHIT Payment Bot <${GMAIL_USER}>"`,
      to: ADMIN_RECEIVER,
      subject: "New Payment Submission",
      text: `Name: ${name}\nEmail: ${email}\nLocation: ${
        location || "Not provided"
      }`,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path,
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
