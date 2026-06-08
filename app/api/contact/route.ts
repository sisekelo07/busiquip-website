import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, getContactFormEmailHTML, getConfirmationEmailHTML } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.CONTACT_FORM_TO_EMAIL || 'info@busiquip.com';

    // Send admin notification
    const adminEmailSent = await sendEmail({
      to: adminEmail,
      subject: `New Contact Form: ${subject}`,
      html: getContactFormEmailHTML({
        name,
        email,
        phone,
        company,
        subject,
        message,
      }),
    });

    // Send confirmation to user
    const confirmationEmailSent = await sendEmail({
      to: email,
      subject: 'We Received Your Inquiry - BusiQuip',
      html: getConfirmationEmailHTML(name),
    });

    if (adminEmailSent) {
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
