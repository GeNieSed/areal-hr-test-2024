const {
  createDepartmentSchema,
  updateDepartmentSchema,
} = require('../validators/departmentValidator');
const pool = require('../config/db.js');

// Получить все отделы
exports.readDepartments = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM departments');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Создать новый отдел
exports.createDepartment = async (req, res) => {
  try {
    // Валидация данных
    const { error } = createDepartmentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { organization_id, name, parent_department_id, comment } = req.body;
    const result = await pool.query(
      'INSERT INTO departments (organization_id, name, parent_department_id, comment) VALUES ($1, $2, $3, $4) RETURNING *',
      [organization_id, name, parent_department_id, comment],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Обновить отдел
exports.updateDepartment = async (req, res) => {
  try {
    // Валидация данных
    const { error } = updateDepartmentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { id } = req.params;
    const { organization_id, name, parent_department_id, comment } = req.body;
    const result = await pool.query(
      'UPDATE departments SET organization_id = $1, name = $2, parent_department_id = $3, comment = $4 WHERE id = $5 RETURNING *',
      [organization_id, name, parent_department_id, comment, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Отдел не найден' });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Удалить отдел
exports.deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM departments WHERE id = $1 RETURNING *',
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Отдел не найден' });
    }

    res.status(200).json({ message: 'Отдел удален' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
