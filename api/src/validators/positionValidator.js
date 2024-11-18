const Joi = require('joi');

const positionSchema = Joi.object({
    department_id: Joi.number().integer().required().messages({
        'number.base': 'Поле department_id должно быть числом',
        'any.required': 'Поле department_id обязательно к заполнению',
    }),
    name: Joi.string().max(100).required().messages({
        'string.base': 'Поле name должно быть строкой',
        'string.max': 'Поле name должно содержать максимум 100 символов',
        'any.required': 'Поле name обязательно к заполнению',
    }),
});

module.exports = positionSchema;
