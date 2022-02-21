const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export default async function (req, res) {
  const body = JSON.parse(req.body);

  const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

  const OAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    // Generate the accessToken on the fly
    const accessToken = await OAuth2Client.getAccessToken();

    // Account authentication config
    const authConfig = {
      type: "OAuth2",
      user: CLIENT_EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    };

    // Create the email envelope (transport)
    const transport = nodemailer.createTransport(authConfig);

    // Create the email options and body
    const mailOptions = {
      from: `${CLIENT_EMAIL}`,
      to: body.email,
      subject: `${body.name} – ${body.reason}`,
      text: `${body.message}`,
    };

    await transport.sendMail(mailOptions);
    // const result = await
    // return result;
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({
    message: "Email has been sent",
  });
}
