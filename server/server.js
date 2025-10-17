import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// ✅ Load environment variables from .env file
dotenv.config();

const app = express();
// app.use(cors());
app.use(bodyParser.json());

import cors from "cors";

app.use(cors({
  origin: "https://landing-page-frontend-psi.vercel.app", // your frontend
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));


// ✅ Get the correct __dirname (needed for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Define the absolute path of your PDF file
const pdfPath = path.resolve(__dirname, "YogaGuide.pdf");

// ✅ Check if file exists (useful for debugging)
if (!fs.existsSync(pdfPath)) {
  console.error("❌ PDF file not found at:", pdfPath);
} else {
  console.log("✅ PDF found at:", pdfPath);
}

// ✅ Nodemailer transporter setup using environment variables
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,      // set in .env
    pass: process.env.GMAIL_PASSWORD,  // set in .env (App Password)
  },
});

// ✅ Email sending endpoint
app.post("/send-guide", (req, res) => {
  const { email } = req.body;

  // Respond immediately so frontend doesn't wait
  res.status(202).json({ success: true, message: "Email is being sent..." });

  // Send the email in the background
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

  transporter.sendMail(mailOptions)
    .then(() => console.log(`✅ Email sent successfully to ${email}`))
    .catch((error) => console.error("❌ Error sending email:", error));
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
