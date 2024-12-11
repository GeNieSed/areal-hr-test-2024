const { employeeSchema } = require('../validators/employees-validator');
const pool = require('../config/db.js');

// просмотр всех данных
exports.readEmployees = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employees');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Добавление новой записи
exports.createEmployees = async (req, res) => {
  try {
    const { error } = employeeSchema.validate(req.body);
    if (error) {
      res.status(500).json({ error: error.details[0].message });
    }
    const { gender, is_deleted, hire_date, birth_date } = req.body;
    const result = await pool.query(
      'INSERT INTO employees (gender, is_deleted, hire_date, birth_date) VALUES ($1, $2, $3 , $4) RETURNING *',
      [gender, is_deleted, hire_date, birth_date],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Обновление данных
exports.updateEmployees = async (req, res) => {
  try {
    const { error } = employeeSchema.validate(req.body);
    if (error) {
      res.status(500).json({ error: error.details[0].message });
    }
    const { id } = req.params;
    const { gender, is_deleted, hire_date, birth_date } = req.body;
    const result = await pool.query(
      'UPDATE employees SET gender = $1, is_deleted = $2, hire_date = $3 , birth_date = $4 WHERE id = $5 RETURNING *',
      [gender, is_deleted, hire_date, birth_date, id],
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
exports.deleteEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM employees WHERE id = $1 RETURNING *',
      [id],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ошибка' });
    }
    res.status(200).json({ message: 'Ошибка при удалении сотрудника' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
