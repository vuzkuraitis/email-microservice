import Joi from "joi";

const mailSchema = Joi.object({
  auth: Joi.string().required(),
  to: Joi.string().email().required(),
  subject: Joi.string(),
  text: Joi.string().required(),
  html: Joi.string().required(),
  attachments: Joi.string(),
});

const validate = async (req, res, next) => {
  try {
    req.body = await mailSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    return res.send(400).send({ err: "Incorrect data passed" });
  }
};

export default validate;
