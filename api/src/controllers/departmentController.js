const pool = require('../config/db.js');

// Получение всех департаментов
exports.readDepartments = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM departments');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Создание департамента
exports.createDepartment = async (req, res) => {
    try {
        const { organization_id, name, parent_department_id, comment } = req.body;
        const result = await pool.query(
            'INSERT INTO departments (organization_id, name, parent_department_id, comment) VALUES ($1, $2, $3, $4) RETURNING *',
            [organization_id, name, parent_department_id, comment]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Обновление департамента
exports.updateDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, comment } = req.body;
        const result = await pool.query(
            'UPDATE departments SET name = $1, comment = $2 WHERE id = $3 RETURNING *',
            [name, comment, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Департамент не найден' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Удаление департамента
exports.deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM departments WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Департамент не найден' });
        }
        res.status(200).json({ message: 'Департамент успешно удалён' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

