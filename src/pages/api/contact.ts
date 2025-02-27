

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { generateEmailTemplate } from "../../lib/emailTemplate";


export const POST: APIRoute = async ({ request }) => {
  try {
    // Check content type
    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      throw new Error("Content-Type must be application/json");
    }

    // Parse JSON body instead of form data
    const data = await request.json();
    const { name, email, phone, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        message: "Missing required fields"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "239c618b1b3eee",
        pass: "16397c15a2a6a3"
      }
    });

    // Send email
    await transporter.sendMail({
      from: "test@example.com",
      to: "agent@example.com",
      subject: "New Contact Form Submission",
      html: generateEmailTemplate({ name, email, phone, message }),
    });

    return new Response(JSON.stringify({
      message: "Email sent successfully"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({
      message: "Error sending email"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}; 