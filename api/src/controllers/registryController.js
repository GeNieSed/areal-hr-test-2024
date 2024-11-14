const pool = require('../config/db.js');
// просмотр всех данных
exports.readRegistry = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM employee_registry');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Добавление новой записи
exports.createRegistry = async (req, res) => {
    try {
        const { position_id, department_id, organization_id, employee_id } = req.body;
        const result = await pool.query(
            'INSERT INTO employee_registry (position_id, department_id, organization_id, employee_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [position_id, department_id, organization_id, employee_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Обновление данных
exports.updateRegistry = async (req, res) => {
    try {
        const { id } = req.params;
        const { position_id, department_id, organization_id, employee_id } = req.body;
        const result = await pool.query(
            'UPDATE employee_registry SET position_id = $1, department_id = $2, organization_id = $3, employee_id = $4 WHERE id = $5 RETURNING *',
            [position_id, department_id, organization_id, employee_id, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Ошибка при обновлении' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//Удаление данных
exports.deleteRegistry = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM employee_registry WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'ошибка' });
        }
        res.status(200).json({ message: 'Ошибка при удалении' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};