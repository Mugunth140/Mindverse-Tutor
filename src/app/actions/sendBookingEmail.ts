"use server";

import { addMinutes } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export async function sendBookingEmail(data: {
  parent_name: string;
  parent_email: string;
  parent_phone: string;
  street_address: string;
  city: string;
  country: string;
  child_name: string;
  child_grade: string;
  call_datetime_utc: string;
  timezone: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY is not set in environment variables");
    return { success: false, error: "Email configuration missing" };
  }

  const startDate = new Date(data.call_datetime_utc);
  const endDate = addMinutes(startDate, 30);
  
  // Format for Booker's local timezone
  const userDate = formatInTimeZone(startDate, data.timezone, 'MMMM d, yyyy');
  const userTime = `${formatInTimeZone(startDate, data.timezone, 'h:mm a')} - ${formatInTimeZone(endDate, data.timezone, 'h:mm a')}`;
  
  // Format for Tutor's timezone (IST)
  const istDate = formatInTimeZone(startDate, 'Asia/Kolkata', 'MMMM d, yyyy');
  const istTime = `${formatInTimeZone(startDate, 'Asia/Kolkata', 'h:mm a')} - ${formatInTimeZone(endDate, 'Asia/Kolkata', 'h:mm a')}`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1E293B;">
      <div style="text-align: center; padding: 20px 0;">
        <h2 style="color: #7C3AED; margin-bottom: 5px;">Clarity Call Confirmed!</h2>
        <p style="color: #64748B; margin-top: 0; font-size: 16px;">Mindverse Tutor</p>
      </div>
      
      <p style="font-size: 16px;">Hi ${data.parent_name},</p>
      <p style="font-size: 16px; line-height: 1.6;">Thank you for booking a clarity call. We're excited to learn more about <strong>${data.child_name}'s</strong> learning journey and map out exactly how we can help them thrive!</p>
      
      <div style="background-color: #FCFAF5; padding: 24px; border-radius: 16px; margin: 30px 0; border: 1px solid #e2e8f0;">
        <h3 style="margin-top: 0; color: #1E293B; border-bottom: 2px solid #FBBF24; padding-bottom: 10px; display: inline-block;">Call Time (30 mins slot)</h3>
        
        <div style="margin-bottom: 20px;">
          <p style="font-size: 14px; color: #64748B; margin-bottom: 4px; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Your Local Time (${data.timezone})</p>
          <p style="font-size: 16px; margin-top: 0;"><strong>${userDate}</strong> | ${userTime}</p>
        </div>

        <div style="margin-bottom: 20px;">
          <p style="font-size: 14px; color: #64748B; margin-bottom: 4px; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Tutor's Time (India Standard Time)</p>
          <p style="font-size: 16px; margin-top: 0;"><strong>${istDate}</strong> | ${istTime}</p>
        </div>
        
        <h3 style="margin-bottom: 10px; color: #1E293B; margin-top: 30px; border-bottom: 2px solid #FBBF24; padding-bottom: 10px; display: inline-block;">Provided Information</h3>
        <ul style="line-height: 1.8; margin-top: 0; padding-left: 20px; font-size: 15px;">
          <li><strong>Parent:</strong> ${data.parent_name}</li>
          <li><strong>Email:</strong> ${data.parent_email}</li>
          <li><strong>Phone:</strong> ${data.parent_phone}</li>
          <li><strong>Child:</strong> ${data.child_name} (Grade: ${data.child_grade})</li>
          <li><strong>Address:</strong> ${data.street_address}, ${data.city}, ${data.country}</li>
        </ul>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6;">We will send a calendar invitation to your email shortly. If you need to reschedule, please let us know.</p>
      <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">Best regards,<br/><strong>The Mindverse Tutor Team</strong></p>
    </div>
  `;

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: "Mindverse Tutor", email: "no-reply@mindversetutor.com" },
        to: [
          { email: data.parent_email, name: data.parent_name },
          { email: "mindversetutor@gmail.com", name: "Mindverse Admin" }
        ],
        subject: `Clarity Call Confirmed: ${data.parent_name} & ${data.child_name}`,
        htmlContent
      })
    });

    if (!response.ok) {
      const resData = await response.json();
      console.error("Brevo API error:", resData);
      return { success: false, error: "Failed to send email" };
    }

    return { success: true };
  } catch (err) {
    console.error("Email send error:", err);
    return { success: false, error: "Internal server error" };
  }
}
