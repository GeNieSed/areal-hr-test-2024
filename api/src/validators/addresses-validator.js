const Joi = require('joi');

const addressSchema = Joi.object({
    employee_id: Joi.number().integer().required().messages({
        'number.base': 'Поле employee_id должно быть числом',
        'any.required': 'Поле employee_id обязательно к заполнению',
    }),
    region: Joi.string().max(60).required().messages({
        'string.base': 'Поле region должно быть строкой',
        'string.max': 'Поле region должно содержать максимум 60 символов',
        'any.required': 'Поле region обязательно к заполнению',
    }),
    city: Joi.string().max(40).required().messages({
        'string.base': 'Поле city должно быть строкой',
        'string.max': 'Поле city должно содержать максимум 40 символов',
        'any.required': 'Поле city обязательно к заполнению',
    }),
    street: Joi.string().max(80).required().messages({
        'string.base': 'Поле street должно быть строкой',
        'string.max': 'Поле street должно содержать максимум 80 символов',
        'any.required': 'Поле street обязательно к заполнению',
    }),
    building: Joi.string().max(20).required().messages({
        'string.base': 'Поле building должно быть строкой',
        'string.max': 'Поле building должно содержать максимум 20 символов',
        'any.required': 'Поле building обязательно к заполнению',
    }),
    apartment: Joi.string().max(6).allow(null).messages({
        'string.base': 'Поле apartment должно быть строкой',
        'string.max': 'Поле apartment должно содержать максимум 6 символов',
    }),
});

module.exports = addressSchema;
