const Joi = require('joi');

// Схема для создания нового отдела
const createDepartmentSchema = Joi.object({
  organization_id: Joi.number().integer().required().messages({
    'number.base': 'organization_id должен быть числом',
    'any.required': 'organization_id обязателен',
  }),
  name: Joi.string().min(3).max(100).required().messages({
    'string.empty': 'Название отдела не может быть пустым',
    'string.min': 'Название отдела должно быть минимум 3 символа',
    'string.max': 'Название отдела должно быть максимум 100 символов',
  }),
  parent_department_id: Joi.number().integer().allow(null).messages({
    'number.base': 'parent_department_id должен быть числом или пустым',
  }),
  comment: Joi.string().max(500).allow(null, '').messages({
    'string.max': 'Комментарий не больше 500 символов',
  }),
});

// Схема для обновления существующего отдела
const updateDepartmentSchema = Joi.object({
  organization_id: Joi.number().integer().messages({
    'number.base': 'organization_id должен быть числом',
  }),
  name: Joi.string().min(3).max(100).messages({
    'string.empty': 'Название отдела не может быть пустым',
    'string.min': 'Название отдела должно быть минимум 3 символа',
    'string.max': 'Название отдела должно быть максимум 100 символов',
  }),
  parent_department_id: Joi.number().integer().allow(null).messages({
    'number.base': 'parent_department_id должен быть числом или быть пустым',
  }),
  comment: Joi.string().max(500).allow(null, '').messages({
    'string.max': 'Комментарий не больше 500 символов',
  }),
});

module.exports = {
  createDepartmentSchema,
  updateDepartmentSchema,
};
