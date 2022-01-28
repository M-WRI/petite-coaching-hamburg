const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.EMAIL_API_KEY);

export default function (req, res) {
  const body = JSON.parse(req.body);
  console.log(body, "<----");

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Telefon: ${body.phone}\r\n
    Art der Anfrage: ${body.reason}\r\n
    Nachricht: ${body.message}\r\n
  `;

  const data = {
    // to: `me@moritzwright.com`,
    // to: `${process.env.TO}`,
    from: `${body.email}`,
    subject: `${body.name} – ${body.reason}`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);
  res.status(200).json({ status: "ok" });
}
