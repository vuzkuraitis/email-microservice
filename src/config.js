import "dotenv/config.js";

export default {
  port: process.env.PORT,
  password: process.env.PASS,
  mailConfig: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: "demo@hamburg-athletics.eu",
      pass: "pyjRYqx6r3khDF9U",
    },
  },
};
