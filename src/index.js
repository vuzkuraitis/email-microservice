import express from "express";
import cors from "cors";

import validate from "./controler/validate.js";
import auth from "./controler/auth.js";
import sendMail from "./controler/sendMail.js";
import config from "./config.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", validate, auth, sendMail);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
