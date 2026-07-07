"use server";

export async function sendBookingEmail(data: {
  parent_name: string;
  parent_email: string;
  parent_phone: string;
  street_address: string;
  city: string;
  country: string;
  child_name: string;
  child_grade: string;
  date_time_local: string;
  timezone: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY is not set in environment variables");
    return { success: false, error: "Email configuration missing" };
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1E293B;">
      <div style="text-align: center; padding: 20px 0;">
        <h2 style="color: #7C3AED; margin-bottom: 5px;">Clarity Call Confirmed!</h2>
        <p style="color: #64748B; margin-top: 0; font-size: 16px;">Mindverse Tutor</p>
      </div>
      
      <p style="font-size: 16px;">Hi ${data.parent_name},</p>
      <p style="font-size: 16px; line-height: 1.6;">Thank you for booking a clarity call. We're excited to learn more about <strong>${data.child_name}'s</strong> learning journey and map out exactly how we can help them thrive!</p>
      
      <div style="background-color: #FCFAF5; padding: 24px; border-radius: 16px; margin: 30px 0; border: 1px solid #e2e8f0;">
        <h3 style="margin-top: 0; color: #1E293B; border-bottom: 2px solid #FBBF24; padding-bottom: 10px; display: inline-block;">Call Details</h3>
        <p style="font-size: 16px;"><strong>Date & Time:</strong><br/> ${data.date_time_local} (${data.timezone})</p>
        
        <h3 style="margin-bottom: 10px; color: #1E293B; margin-top: 25px;">Provided Information</h3>
        <ul style="line-height: 1.8; margin-top: 0; padding-left: 20px; font-size: 15px;">
          <li><strong>Parent:</strong> ${data.parent_name}</li>
          <li><strong>Email:</strong> ${data.parent_email}</li>
          <li><strong>Phone:</strong> ${data.parent_phone}</li>
          <li><strong>Child:</strong> ${data.child_name} (Grade: ${data.child_grade})</li>
          <li><strong>Address:</strong> ${data.street_address}, ${data.city}, ${data.country}</li>
        </ul>
      </div>
      
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
