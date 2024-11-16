const pool = require('../config/db.js');

// Просмотр всех данных
exports.readFiles = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM files');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Добавление новой записи
exports.createFile = async (req, res) => {
    try {
        const { employee_registry_id, file_name, file_path } = req.body;
        const result = await pool.query(
            'INSERT INTO files (employee_registry_id, file_name, file_path) VALUES ($1, $2, $3) RETURNING *',
            [employee_registry_id, file_name, file_path]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Обновление данных
exports.updateFile = async (req, res) => {
    try {
        const { id } = req.params;
        const { file_name, file_path } = req.body;
        const result = await pool.query(
            'UPDATE files SET file_name = $1, file_path = $2 WHERE id = $3 RETURNING *',
            [file_name, file_path, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Файл не найден' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Удаление данных
exports.deleteFile = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM files WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Файл не найден' });
        }
        res.status(200).json({ message: 'Файл удален' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
