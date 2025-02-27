export const generateEmailTemplate = (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f6f9fc;">
        <div style="
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
        ">
          <div style="
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 32px;
          ">
            <h2 style="
              color: #1a1a1a;
              margin: 0 0 24px 0;
              font-size: 24px;
              font-weight: 600;
            ">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 24px;">
              <div style="
                padding: 16px;
                background: #f8fafc;
                border-radius: 6px;
                margin-bottom: 16px;
              ">
                <p style="margin: 0 0 8px 0;"><strong style="color: #4a5568;">Name:</strong> ${data.name}</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #4a5568;">Email:</strong> ${data.email}</p>
                <p style="margin: 0;"><strong style="color: #4a5568;">Phone:</strong> ${data.phone || 'Not provided'}</p>
              </div>
              
              <div style="
                background: #f8fafc;
                border-radius: 6px;
                padding: 16px;
              ">
                <h3 style="
                  color: #4a5568;
                  margin: 0 0 12px 0;
                  font-size: 16px;
                  font-weight: 600;
                ">Message:</h3>
                <p style="
                  margin: 0;
                  line-height: 1.5;
                  color: #1a1a1a;
                ">${data.message}</p>
              </div>
            </div>

            <div style="
              font-size: 12px;
              color: #718096;
              text-align: center;
              margin-top: 32px;
              padding-top: 16px;
              border-top: 1px solid #e2e8f0;
            ">
              This is an automated message from your website's contact form.
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}; 