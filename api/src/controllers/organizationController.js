const {organizationSchema} = require('../validators/operationsValidator');
const pool = require('../config/db.js');
// просмотр всех данных
exports.readOrganizations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM organizations');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Добавление новой записи
exports.createOrganization = async (req, res) => {
    try {
        const {error} = organizationSchema.validate(req.body);
        if (error) {
            return res.status(500).json({ error: error.details[0].message });
        }
        const { name, comment } = req.body;
        const result = await pool.query(
            'INSERT INTO organizations (name, comment) VALUES ($1, $2) RETURNING *',
            [name, comment]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Обновление данных
exports.updateOrganization = async (req, res) => {
    try {
        const {error} = organizationSchema.validate(req.body);
        if (error) {
            return res.status(500).json({ error: error.details[0].message });
        }
        const { id } = req.params;
        const { name, comment } = req.body;
        const result = await pool.query(
            'UPDATE organizations SET name = $1, comment = $2 WHERE id = $3 RETURNING *',
            [name, comment, id]
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
exports.deleteOrganization = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM organizations WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'ошибка' });
        }
        res.status(200).json({ message: 'Ошибка при удалении' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};