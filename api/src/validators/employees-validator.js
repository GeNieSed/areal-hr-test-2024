const Joi = require('joi');

const employeeSchema = Joi.object({
    gender: Joi.string().valid('male', 'female', 'other').required().messages({
        'string.base': 'Поле gender должно быть строкой',
        'any.only': 'Поле gender должно быть одним из: male, female, other',
        'any.required': 'Поле gender обязательно',
    }),
    is_deleted: Joi.boolean().default(false).messages({
        'boolean.base': 'Поле is_deleted должен быть false или true',
    }),
    hire_date: Joi.date().required().messages({
        'date.base': 'Поле hire_date должно быть датой',
        'any.required': 'Поле hire_date обязательно',
    }),
    birth_date: Joi.date().required().messages({
        'date.base': 'Поле birth_date должно быть датой',
        'any.required': 'Поле birth_date обязательно',
    }),
});

module.exports = employeeSchema;
