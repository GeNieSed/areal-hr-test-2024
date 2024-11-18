const Joi = require('joi');

const employeeRegistrySchema = Joi.object({
    employee_id: Joi.number().integer().required().messages({
        'number.base': 'Поле employee_id должно быть числом',
        'any.required': 'Поле employee_id обязательно к заполнению',
    }),
    position_id: Joi.number().integer().required().messages({
        'number.base': 'Поле position_id должно быть числом',
        'any.required': 'Поле position_id обязательно к заполнению',
    }),
    department_id: Joi.number().integer().required().messages({
        'number.base': 'Поле department_id должно быть числом',
        'any.required': 'Поле department_id обязательно к заполнению',
    }),
    organization_id: Joi.number().integer().required().messages({
        'number.base': 'Поле organization_id должно быть числом',
        'any.required': 'Поле organization_id обязательно к заполнению',
    }),
});

module.exports = employeeRegistrySchema;
