const Joi = require('joi');

const changeHistorySchema = Joi.object({
    operation_id: Joi.number().integer().allow(null).messages({
        'number.base': 'Поле operation_id должно быть числом',
    }),
    timestamp: Joi.date().default(() => new Date(), 'текущее время').messages({
        'date.base': 'Поле timestamp должно быть датой',
    }),
    changed_by: Joi.number().integer().allow(null).messages({
        'number.base': 'Поле changed_by должно быть числом',
    }),
    object_type: Joi.string().max(100).required().messages({
        'string.base': 'Поле object_type должно быть строкой',
        'string.max': 'Поле object_type должно содержать максимум 100 символов',
        'any.required': 'Поле object_type обязательно к заполнению',
    }),
    changed_fields: Joi.object().required().messages({
        'object.base': 'Поле changed_fields должно быть объектом',
        'any.required': 'Поле changed_fields обязательно к заполнению',
    }),
});

module.exports = changeHistorySchema;
