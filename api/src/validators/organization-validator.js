const Joi = require('joi');

const organizationSchema = Joi.object({
  id: Joi.number().integer().optional(),
  name: Joi.string().max(150).required().messages({
    'string.base': 'Поле name должно быть строкой',
    'string.max': 'Поле name должно содержать максимум 150 символов',
    'any.required': 'Поле name обязательно к заполнению',
  }),
  comment: Joi.string().max(500).allow(null, '').messages({
    'string.base': 'Поле comment должно быть строкой',
    'string.max': 'Поле comment должно содержать максимум 500 символов',
  }),
});

module.exports = { organizationSchema };
