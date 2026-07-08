"use server";

export async function sendContactEmail(formData: FormData) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY is not set in environment variables");
    return { success: false, error: "Email configuration missing" };
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const country = formData.get("country") as string;
  const subject = formData.get("subject") as string;
  const query = formData.get("query") as string;

  if (!name || !email || !country || !subject || !query) {
    return { success: false, error: "All fields are required" };
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1E293B;">
      <div style="padding: 20px 0; border-bottom: 2px solid #FBBF24; margin-bottom: 20px;">
        <h2 style="color: #7C3AED; margin-bottom: 5px;">New Contact Request</h2>
        <p style="color: #64748B; margin-top: 0; font-size: 16px;">Mindverse Tutor Website</p>
      </div>
      
      <p style="font-size: 16px; margin-bottom: 20px;">You have received a new inquiry from the website contact form:</p>
      
      <div style="background-color: #FCFAF5; padding: 24px; border-radius: 16px; border: 1px solid #e2e8f0; margin-bottom: 30px;">
        <ul style="line-height: 1.8; margin: 0; padding-left: 0; list-style-type: none; font-size: 15px;">
          <li><strong style="color: #475569; display: inline-block; width: 80px;">Name:</strong> ${name}</li>
          <li><strong style="color: #475569; display: inline-block; width: 80px;">Email:</strong> <a href="mailto:${email}" style="color: #3B82F6;">${email}</a></li>
          <li><strong style="color: #475569; display: inline-block; width: 80px;">Country:</strong> ${country}</li>
          <li><strong style="color: #475569; display: inline-block; width: 80px;">Subject:</strong> ${subject}</li>
        </ul>
      </div>
      
      <h3 style="color: #1E293B; margin-bottom: 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Query:</h3>
      <div style="background-color: #F8FAFC; padding: 20px; border-radius: 12px; border-left: 4px solid #7C3AED; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${query}</div>
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
        sender: { name: "Mindverse Website", email: "no-reply@mindversetutor.com" },
        to: [
          { email: "mindversetutor@gmail.com", name: "Mindverse Admin" }
        ],
        replyTo: { email: email, name: name },
        subject: `New Query: ${subject} (from ${name})`,
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
