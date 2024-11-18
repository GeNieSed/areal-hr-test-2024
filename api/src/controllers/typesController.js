const {operationTypeSchema} = require('../validators/typesValidator')
const pool = require('../config/db.js');
// просмотр всех данных
exports.readTypes = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM operation_types');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Добавление новой записи
exports.createTypes = async (req, res) => {
    try {
        const {error} = operationTypeSchema.validate(req.body);
        if (error) {
            return res.status(500).json({ error: error.details[0].message });
        }
        const { name } = req.body;
        const result = await pool.query(
            'INSERT INTO operation_types (name) VALUES ($1) RETURNING *',
            [name]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Обновление данных
exports.updateTypes = async (req, res) => {
    try {
        const {error} = operationTypeSchema.validate(req.body);
        if (error) {
            return res.status(500).json({ error: error.details[0].message });
        }
        const { id } = req.params;
        const { name } = req.body;
        const result = await pool.query(
            'UPDATE operation_types SET name = $1 WHERE id =$2 RETURNING *',
            [name, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Ошибка при обновлении' });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//Удаление данных
exports.deleteTypes = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM operation_types WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'ошибка' });
        }
        res.status(200).json({ message: 'Ошибка при удалении' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};