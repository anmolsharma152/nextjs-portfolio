import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const createEmailContent = (name: string, email: string, subject: string, message: string) => ({
  from: 'Contact Form <onboarding@resend.dev>',
  to: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || 'sharmaa15297@gmail.com',
  replyTo: email,
  subject: `New Contact: ${subject}`,
  text: `
    You have a new contact form submission:
    
    Name: ${name}
    Email: ${email}
    
    Message:
    ${message}
  `,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line; background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
      </div>
      <p style="margin-top: 20px; color: #6b7280; font-size: 0.9em;">
        This message was sent from your portfolio contact form.
      </p>
    </div>
  `,
});

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service is not configured' }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, subject, message, honeypot } = await request.json();

    // Silently drop bot submissions that fill out the hidden honeypot field
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully!',
      });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    const emailOptions = createEmailContent(name, email, subject, message);
    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error('Error sending email with Resend:', error);
      return NextResponse.json({ error: 'Failed to send message via Resend.' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
      data,
    });
  } catch (error: unknown) {
    console.error('Error in contact API route:', {
      error: error instanceof Error ? error.message : String(error),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again later.',
        details:
          process.env.NODE_ENV === 'development' && error instanceof Error
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}
