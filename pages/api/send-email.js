import Mailgun from "mailgun.js";
import * as FormData from "form-data";

//  resource: https://dev.to/wpickeral/building-a-contact-form-with-nextjs-and-nodemailer-4emp
export default async function handler(req, res) {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.NEXT_PUBLIC_MAILGUN_API_KEY,
  });

  const { emailReciever, emailSubject, emailText, emailHtml, emailSendDate } = req.body;

  if (req.method === "POST") {
    try {
      const msg = await mg.messages.create("sandbox-123.mailgun.org", {
        from: "Excited User <mailgun@sandbox-123.mailgun.org>",
        // We want to send the address to the same people who were matched togehter eg. send same email to 3 matches
        // @note  can be an array
        to: emailReciever,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
        "o:deliverytime": emailSendDate
      });
      console.log(msg); // logs response data
    } catch (err) {
      console.error(err); // logs any error
    }
  }

  // const message = {
  //   from: req.body.email,
  //   // to: process.env.GMAIL_EMAIL_ADDRESS,
  //   subject: req.body.subject,
  //   text: req.body.message,
  //   // html: `<p>${req.body.message}</p>`
  // };

  // let transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.GMAIL_EMAIL_ADDRESS,
  //     pass: process.env.GMAIL_APP_PASSWORD,
  //   },
  // });

  // if (req.method === "POST") {
  //   transporter.sendMail(message, (err, info) => {
  //     if (err) {
  //       res.status(404).json({
  //         error: `Connection refused at ${err.address}`,
  //       });
  //     } else {
  //       res.status(250).json({
  //         success: `Message delivered to ${info.accepted}`,
  //       });
  //     }
  //   });
  // }
}
