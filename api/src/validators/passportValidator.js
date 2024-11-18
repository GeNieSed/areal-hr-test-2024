const Joi = require('joi');

const passportDetailsSchema = Joi.object({
    employee_id: Joi.number().integer().required().messages({
        'number.base': 'Поле employee_id должно быть числом',
        'any.required': 'Поле employee_id обязательно к заполнению',
    }),
    first_name: Joi.string().max(50).required().messages({
        'string.base': 'Поле first_name должно быть строкой',
        'string.max': 'Поле first_name должно содержать максимум 50 символов',
        'any.required': 'Поле first_name обязательно к заполнению',
    }),
    last_name: Joi.string().max(50).required().messages({
        'string.base': 'Поле last_name должно быть строкой',
        'string.max': 'Поле last_name должно содержать максимум 50 символов',
        'any.required': 'Поле last_name обязательно к заполнению',
    }),
    middle_name: Joi.string().max(50).allow(null).messages({
        'string.base': 'Поле middle_name должно быть строкой',
        'string.max': 'Поле middle_name должно содержать максимум 50 символов',
    }),
    series: Joi.string().length(4).required().messages({
        'string.base': 'Поле series должно быть строкой',
        'string.length': 'Поле series должно содержать ровно 4 символа',
        'any.required': 'Поле series обязательно к заполнению',
    }),
    number: Joi.string().length(6).required().messages({
        'string.base': 'Поле number должно быть строкой',
        'string.length': 'Поле number должно содержать ровно 6 символов',
        'any.required': 'Поле number обязательно к заполнению',
    }),
    issue_date: Joi.date().required().messages({
        'date.base': 'Поле issue_date должно быть датой',
        'any.required': 'Поле issue_date обязательно к заполнению',
    }),
    issue_code: Joi.string().length(10).required().messages({
        'string.base': 'Поле issue_code должно быть строкой',
        'string.length': 'Поле issue_code должно содержать ровно 10 символов',
        'any.required': 'Поле issue_code обязательно к заполнению',
    }),
    is_active: Joi.boolean().default(true).messages({
        'boolean.base': 'Поле is_active должно быть логическим значением',
    }),
    issued_by: Joi.string().max(120).allow(null).messages({
        'string.base': 'Поле issued_by должно быть строкой',
        'string.max': 'Поле issued_by должно содержать максимум 120 символов',
    }),
});

module.exports = passportDetailsSchema;
