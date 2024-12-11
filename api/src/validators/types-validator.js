const Joi = require('joi');

const operationTypeSchema = Joi.object({
  id: Joi.number().integer().optional(),
  name: Joi.string().max(100).required().messages({
    'string.base': 'Поле name должно быть строкой',
    'string.max': 'Поле name должно содержать максимум 100 символов',
    'any.required': 'Поле name обязательно к заполнению',
  }),
});

module.exports = operationTypeSchema;
