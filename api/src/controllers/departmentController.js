const pool = require('../config/db.js');


// просмотр всех данных
exports.readOrganizations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM departments');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Добавление новой записи
exports.createOrganization = async (req, res) => {
    try {
        const { organization_id, name, parent_department_id, comment  } = req.body;
        const result = await pool.query(
            'INSERT INTO departments (organization_id, name, parent_department_id, comment) VALUES ($1, $2, $3, $4) RETURNING *',
            [organization_id, name, parent_department_id, comment]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Обновление данных
exports.updateOrganization = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, comment } = req.body;
        const result = await pool.query(
            'UPDATE departments SET organization_id = $1, name = $2, parent_department_id = $3 ,comment = 3$ WHERE id = $3 RETURNING *',
            [name, comment, id]
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
exports.deleteOrganization = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM departments WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'ошибка' });
        }
        res.status(200).json({ message: 'Ошибка при удалении' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};