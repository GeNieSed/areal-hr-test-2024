const {changeHistorySchema} = require('../validators/historyValidator');
const pool = require('../config/db.js');

// Просмотр всех данных
exports.readChangeHistory = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM change_history');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Добавление новой записи
exports.createChangeHistory = async (req, res) => {
    try {
        const {error} = changeHistorySchema.validate(req.body);
        if (error) {
            return res.status(500).json({ error: error.details[0].message });
        }
        const { operation_id, changed_by, object_type, changed_fields } = req.body;
        const result = await pool.query(
            'INSERT INTO change_history (operation_id, changed_by, object_type, changed_fields) VALUES ($1, $2, $3, $4) RETURNING *',
            [operation_id, changed_by, object_type, JSON.stringify(changed_fields)]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Обновление данных
exports.updateChangeHistory = async (req, res) => {
    try {
        const {error} = changeHistorySchema.validate(req.body);
        if (error) {
            return res.status(500).json({ error: error.details[0].message });
        }
        const { id } = req.params;
        const { changed_fields } = req.body;
        const result = await pool.query(
            'UPDATE change_history SET changed_fields = $1 WHERE id = $2 RETURNING *',
            [JSON.stringify(changed_fields), id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Запись не найдена' });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Удаление данных
exports.deleteChangeHistory = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM change_history WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Запись не найдена' });
        }
        res.status(200).json({ message: 'Запись удалена' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
