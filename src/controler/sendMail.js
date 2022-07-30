import config from "../config.js";
import nodemailer from "nodemailer";
import path from "path";

const sendMail = async (req, res) => {
  const { to, subject, html } = req.body;
  const __dirname = path.resolve();
  const transporter = nodemailer.createTransport(config.mailConfig);

  const info = await transporter.sendMail({
    from: '"Hamburg Athletics" <demo@hamburg-athletics.eu>',
    to,
    subject,
    html,
    attachments: [
      {
        filename: "logo.jpeg",
        path: `${__dirname}/src/logo.jpeg`,
        cid: "logo",
      },
    ],
  });

  return res.send({ msg: `Email sent`, id: info.messageId });
};

export default sendMail;
