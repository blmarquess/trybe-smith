import Joi from 'joi';

const productSchemas = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default productSchemas;