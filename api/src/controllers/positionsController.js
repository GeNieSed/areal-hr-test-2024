const { positionSchema } = require('../validators/positionValidator');
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
    const { error } = positionSchema.validate(req.body);
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    const { department_id, name } = req.body;
    const result = await pool.query(
      'INSERT INTO positions (department_id, name) VALUES ($1, $2) RETURNING *',
      [department_id, name],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Обновление данных
exports.updatePositions = async (req, res) => {
  try {
    const { error } = positionSchema.validate(req.body);
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    const { id } = req.params;
    const { department_id, name } = req.body;
    const result = await pool.query(
      'UPDATE positions SET department_id = $1, name = $2 WHERE id = $3 RETURNING *',
      [department_id, name, id],
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
exports.deletePositions = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM positions WHERE id = $1 RETURNING *',
      [id],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Запись не найдена' });
    }
    res.status(200).json({ message: 'Должность успешно удалена' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
