const pool = require('../config/db.js');


// просмотр всех данных
exports.readPositions = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM positions');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Добавление новой записи
exports.createPositions = async (req, res) => {
    try {
        const { department_id, name } = req.body;
        const result = await pool.query(
            'INSERT INTO positions (department_id, name) VALUES (6, \'Продажа\') RETURNING *',
            [department_id, name]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Обновление данных
exports.updatePositions = async (req, res) => {
    try {
        const { id } = req.params;
        const { department_id, name } = req.body;
        const result = await pool.query(
            'UPDATE positions SET department_id = $1, name = $2 WHERE id = $3 RETURNING *',
            [department_id, name, id]
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
exports.deletePositions = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM positions WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'ошибка' });
        }
        res.status(200).json({ message: 'Ошибка при удалении' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};