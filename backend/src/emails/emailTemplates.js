export function createWelcomeEmailTemplate(name, clientURL) {
  const safeName = escapeHtml(name);
  const cta = escapeHtml(clientURL);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Welcome to Messenger</title>
  <!--[if mso]>
    <style>
      /* Outlook-specific tweaks */
      .fallback-font { font-family: Arial, sans-serif !important; }
    </style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background:#f5f7fb;">
  <!-- Preheader (hidden but shown in inbox previews) -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#ffffff;opacity:0;">
    Welcome to Messenger — open the app to start messaging.
  </div>

  <!-- Outer table -->
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5f7fb;padding:32px 16px;">
    <tr>
      <td align="center">
        <!-- Email container (max width) -->
        <table width="680" cellpadding="0" cellspacing="0" role="presentation" style="max-width:680px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;">
          
          <!-- Hero (gradient fallback to solid) -->
          <tr>
            <td align="left" valign="middle" style="background:linear-gradient(90deg,#5B5BE5,#0BC5EA);background-color:#5B5BE5;padding:28px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td valign="middle" style="vertical-align:middle;">
                    <!-- Small logo block: use background color so if image blocked it still shows -->
                    <div style="display:inline-block;background:#ffffff;padding:8px;border-radius:12px;width:64px;height:64px;vertical-align:middle;">
                      <img alt="Messenger" src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480" width="48" height="48" style="display:block;border:0;outline:none;text-decoration:none;border-radius:8px;"/>
                    </div>
                  </td>
                  <td valign="middle" style="padding-left:14px;vertical-align:middle;">
                    <h1 style="margin:0;color:#ffffff;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;font-size:20px;font-weight:700;">
                      Welcome to Messenger
                    </h1>
                    <div style="color:rgba(255,255,255,0.92);font-size:13px;margin-top:6px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;">
                      Real-time conversations. Simple and private.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content card -->
          <tr>
            <td style="padding:28px;background:#ffffff;">
              <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;color:#111827;font-size:16px;line-height:1.45;">
                <p style="margin:0 0 12px 0;font-size:20px;font-weight:700;color:#0f172a;">Hello ${safeName},</p>

                <p style="margin:0 0 14px 0;color:#334155;">
                  Thanks for joining Messenger — we’re thrilled to have you. You’re all set to start messaging instantly with people you care about.
                </p>

                <!-- Steps box -->
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8fafc;border-radius:8px;border-left:4px solid #0bc5ea;padding:14px;margin:14px 0;">
                  <tr>
                    <td style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;color:#0f172a;font-weight:600;padding-bottom:8px;">
                      Get started in seconds
                    </td>
                  </tr>
                  <tr>
                    <td style="color:#334155;padding-top:2px;">
                      <ul style="margin:0;padding-left:18px;">
                        <li style="margin-bottom:8px;">Set your profile so friends recognize you</li>
                        <li style="margin-bottom:8px;">Search and add contacts you already know</li>
                        <li style="margin-bottom:0;">Start a chat — photos, voice, and more</li>
                      </ul>
                    </td>
                  </tr>
                </table>

                <!-- CTA button (bulletproof + Outlook VML) -->
                <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin-top:18px;margin-bottom:18px;">
                  <tr>
                    <td align="center">
                      <!--[if mso]>
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"
                          href="${cta}"
                          style="height:44px;v-text-anchor:middle;width:220px;" arcsize="50%" stroke="f" fillcolor="#5B5BE5">
                          <w:anchorlock/>
                          <center style="color:#ffffff;font-family:Arial, sans-serif;font-size:16px;font-weight:700;">
                            Open Messenger
                          </center>
                        </v:roundrect>
                      <![endif]-->
                      <!--[if !mso]><!-- -->
                      <a href="${cta}" target="_blank" rel="noopener noreferrer"
                        style="display:inline-block;padding:12px 26px;border-radius:999px;background:linear-gradient(90deg,#5B5BE5,#0BC5EA);text-decoration:none;color:#ffffff;font-weight:700;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;font-size:16px;">
                        Open Messenger
                      </a>
                      <!--<![endif]-->
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 12px 0;color:#334155;">If you need help, reply to this email — our support team is happy to assist.</p>

                <p style="margin:0 0 0 0;color:#0f172a;font-weight:600;">Welcome aboard,<br/>The Messenger Team</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:18px 28px 32px;background:#ffffff;">
              <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;font-size:13px;color:#6b7280;text-align:center;">
                <div style="margin-bottom:8px;">© ${new Date().getFullYear()} Messenger. All rights reserved.</div>
                <div style="font-size:12px;">This message was sent to you because you created an account at Messenger.</div>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* simple HTML-escape helper */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
