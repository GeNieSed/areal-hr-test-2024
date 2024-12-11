const Joi = require('joi');

const fileSchema = Joi.object({
    employee_registry_id: Joi.number().integer().required().messages({
        'number.base': 'Поле employee_registry_id должно быть числом',
        'any.required': 'Поле employee_registry_id обязательно к заполнению',
    }),
    file_name: Joi.string().max(100).required().messages({
        'string.base': 'Поле file_name должно быть строкой',
        'string.max': 'Поле file_name должно содержать максимум 100 символов',
        'any.required': 'Поле file_name обязательно к заполнению',
    }),
    file_path: Joi.string().required().messages({
        'string.base': 'Поле file_path должно быть строкой',
        'any.required': 'Поле file_path обязательно к заполнению',
    }),
});

module.exports = fileSchema;
