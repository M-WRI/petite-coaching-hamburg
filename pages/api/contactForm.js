const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.EMAIL_API_KEY);

export default function (req, res) {
  const body = JSON.parse(req.body);
  console.log(body, "<----");

  const message = `
    Vielen dank für Ihre nachricht.\r\n 
    Ich werde mich in kürze bei Ihnen melden.\r\n
    \r\n
    Mit freundlichen Grüßen,\r\n
    \r\n
    Teresa Jäger - Petite Coaching Hamburg
  `;

  const Adminmessage = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Telefon: ${body.phone}\r\n
    Art der Anfrage: ${body.reason}\r\n
    Nachricht: ${body.message}\r\n
`;

  const data = {
    to: `${body.email}`,
    from: "hello@petite-coaching-hamburg.de",
    subject: `Anfragebestätigung - Petite Coaching Hamburg`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  const Admindata = {
    to: "hello@petite-coaching-hamburg.de",
    from: "kontakt-formular@petite-coaching-hamburg.de",
    subject: `${body.name} – ${body.reason}`,
    text: Adminmessage,
    html: Adminmessage.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);
  mail.send(Admindata);
  res.status(200).json({ status: "ok" });
}
