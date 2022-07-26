import config from "../config.js";
import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

const sendMail = async (req, res) => {
  const { to, subject, text } = req.body;
  const transporter = nodemailer.createTransport(config.mailConfig);

  transporter.use(
    "compile",
    hbs({
      viewEngine: "express-handlebars",
      viewPath: "../views/",
    })
  );

  const info = await transporter.sendMail({
    from: '"Hamburg Athletics" <demo@hamburg-athletics.eu>',
    to,
    subject,
    text,
    attachments: [{ filename: "halogo.jpeg", path: "../assets/halogo.jpeg" }],
    template: "index",
  });

  return res.send({ msg: `Email sent`, id: info.messageId });
};

export default sendMail;
