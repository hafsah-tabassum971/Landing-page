import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Fix __dirname (for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Path to the PDF
const pdfPath = path.resolve(__dirname, "YogaGuide.pdf");

if (!fs.existsSync(pdfPath)) {
  console.error("❌ PDF file not found at:", pdfPath);
} else {
  console.log("✅ PDF found at:", pdfPath);
}

// ✅ Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// ✅ Email sending endpoint
app.post("/api/send-guide", (req, res) => {
  const { email } = req.body;

  res.status(202).json({ success: true, message: "Email is being sent..." });

  const mailOptions = {
    from: `"SerenFlow" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Your 5-Minute Yoga Guide 🧘‍♀️",
    text: "Thank you for joining SerenFlow! Here’s your 5-minute yoga guide to help you find calm and balance.",
    attachments: [
      {
        filename: "YogaGuide.pdf",
        path: pdfPath,
      },
    ],
  };

  transporter
    .sendMail(mailOptions)
    .then(() => console.log(`✅ Email sent successfully to ${email}`))
    .catch((error) => console.error("❌ Error sending email:", error));
});

// ✅ Export app (for Vercel)
export default app;
