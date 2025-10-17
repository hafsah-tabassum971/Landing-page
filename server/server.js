import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// ✅ Load environment variables
dotenv.config();

const app = express();

// ✅ CORS configuration
app.use(cors({
  origin: "https://landing-page-frontend-psi.vercel.app", // your frontend URL
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(bodyParser.json());

// ✅ Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ PDF file path
const pdfPath = path.resolve(__dirname, "YogaGuide.pdf");

if (!fs.existsSync(pdfPath)) {
  console.error("❌ PDF file not found at:", pdfPath);
} else {
  console.log("✅ PDF found at:", pdfPath);
}

// ✅ Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD, // Gmail App Password
  },
});

// ✅ Endpoint
app.post("/send-guide", async (req, res) => {
  const { email } = req.body;

  try {
    const mailOptions = {
      from: `"SerenFlow" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Your 5-Minute Yoga Guide 🧘‍♀️",
      text: "Thank you for joining SerenFlow! Here’s your 5-minute yoga guide.",
      attachments: [
        {
          filename: "YogaGuide.pdf",
          path: pdfPath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to ${email}`);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email." });
  }
});

// ✅ Export app for Vercel serverless
export default app;
