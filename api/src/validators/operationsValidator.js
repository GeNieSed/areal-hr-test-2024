const Joi = require('joi');

const employmentOperationSchema = Joi.object({
  employee_registry_id: Joi.number().integer().required().messages({
    'number.base': 'Поле employee_registry_id должно быть числом',
    'any.required': 'Поле employee_registry_id обязательно',
  }),
  operation_type_id: Joi.number().integer().required().messages({
    'number.base': 'Поле operation_type_id должно быть числом',
    'any.required': 'Поле operation_type_id обязательно',
  }),
  position_id: Joi.number().integer().allow(null).messages({
    'number.base': 'Поле position_id должно быть числом',
  }),
  department_id: Joi.number().integer().allow(null).messages({
    'number.base': 'Поле department_id должно быть числом',
  }),
  salary_change: Joi.number().precision(2).allow(null).messages({
    'number.base': 'Поле salary_change должно быть числом',
  }),
  operation_date: Joi.date()
    .default(() => new Date())
    .messages({
      'date.base': 'Поле operation_date должно быть датой',
    }),
});

module.exports = employmentOperationSchema;
