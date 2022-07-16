import info from "../config.js";

const auth = (req, res, next) => {
  if (req.body.auth !== info.password) {
    return res.status(400).send({ err: "Incorrect password" });
  } else {
    return next();
  }
};

export default auth;
