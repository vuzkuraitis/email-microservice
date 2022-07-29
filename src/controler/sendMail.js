import config from "../config.js";
import nodemailer from "nodemailer";

const sendMail = async (req, res) => {
  const { to, subject, text, html } = req.body;
  const transporter = nodemailer.createTransport(config.mailConfig);

  const info = await transporter.sendMail({
    from: '"Hamburg Athletics" <demo@hamburg-athletics.eu>',
    to,
    subject,
    text,
    html,
    attachments: [
      {
        filename: "logo.jpeg",
        path: `${__dirname}/logo.jpeg`,
        cid: "logo",
      },
    ],
  });

  return res.send({ msg: `Email sent`, id: info.messageId });
};

export default sendMail;
