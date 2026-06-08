export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}): Promise<boolean> {
  try {
    // For production, use SendGrid or similar
    // For now, you can use any email service via API
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: to }],
            subject: subject,
          },
        ],
        from: { email: 'noreply@busiquip.com', name: 'BusiQuip' },
        content: [
          {
            type: 'text/html',
            value: html,
          },
        ],
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}

export function getContactFormEmailHTML(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Inter, Arial, sans-serif; color: #1f2937; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #001F3F 0%, #0052CC 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
          .field { margin: 15px 0; }
          .label { font-weight: 600; color: #111827; }
          .value { color: #4b5563; margin-top: 5px; }
          .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value">${data.email}</div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="label">Phone</div>
              <div class="value">${data.phone}</div>
            </div>
            ` : ''}
            ${data.company ? `
            <div class="field">
              <div class="label">Company</div>
              <div class="value">${data.company}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Subject</div>
              <div class="value">${data.subject}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="value" style="white-space: pre-wrap;">${data.message}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the BusiQuip contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getConfirmationEmailHTML(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Inter, Arial, sans-serif; color: #1f2937; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #001F3F 0%, #0052CC 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
          .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">Thank You for Contacting BusiQuip</h2>
          </div>
          <div class="content">
            <p>Hello ${name},</p>
            <p>We have received your inquiry and our team will contact you within 2 hours during business hours.</p>
            <p><strong>Our Contact Details:</strong></p>
            <ul>
              <li>Phone: (+268) 2404 0156 / 2404 1422</li>
              <li>Email: info@busiquip.com</li>
              <li>Address: Bypass Mantsholo Road, Eveni, Mbabane</li>
              <li>Hours: Mon-Fri 8:00 AM - 5:00 PM | Sat 8:00 AM - 1:00 PM</li>
            </ul>
            <p>In case of emergency, we offer 24/7 support.</p>
            <p>Best regards,<br />The BusiQuip Team</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 BusiQuip Ltd. All rights reserved.</p>
            <p>Driving Africa's Digital Future</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
