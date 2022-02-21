const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export default async function (req, res) {
  const body = JSON.parse(req.body);

  const CLIENT_EMAIL = process.env.CLIENT_EMAIL; //your email from where you'll be sending emails to users
  const CLIENT_ID = process.env.CLIENT_ID; // Client ID generated on Google console cloud
  const CLIENT_SECRET = process.env.CLIENT_SECRET; // Client SECRET generated on Google console cloud
  const REDIRECT_URI = process.env.REDIRECT_URI; // The OAuth2 server (playground)
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN; // The refreshToken we got from the the OAuth2 playground

  const OAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    // Generate the accessToken on the fly
    const accessToken = await OAuth2Client.getAccessToken();

    // Create the email envelope (transport)
    const transport = nodemailer.createTransport({
      type: "OAuth2",
      user: CLIENT_EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    });

    // Create the email options and body
    // ('email': user's email and 'name': is the e-book the user wants to receive)
    const mailOptions = {
      from: `${CLIENT_EMAIL}`,
      to: body.email,
      subject: `${body.name} – ${body.reason}`,
      text: `${body.message}`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({
    message: "Email has been sent",
  });
}
