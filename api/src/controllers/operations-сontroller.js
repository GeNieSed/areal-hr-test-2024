const {
  employmentOperationSchema,
} = require('../validators/operations-validator');
const pool = require('../config/db.js');
// просмотр всех данных
exports.readOperations = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employment_operations');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Добавление новой записи
exports.createOperations = async (req, res) => {
  try {
    const { error } = employmentOperationSchema.validate(req.body);
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    const {
      employee_registry_id,
      operation_type_id,
      position_id,
      department_id,
      salary_change,
      operation_date,
    } = req.body;
    const result = await pool.query(
      'INSERT INTO employment_operations(employee_registry_id, operation_type_id, position_id, department_id, salary_change) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [
        employee_registry_id,
        operation_type_id,
        position_id,
        department_id,
        salary_change,
        operation_date,
      ],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Обновление данных
exports.updateOperations = async (req, res) => {
  try {
    const { error } = employmentOperationSchema.validate(req.body);
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    const { id } = req.params;
    const {
      employee_registry_id,
      operation_type_id,
      position_id,
      department_id,
      salary_change,
      operation_date,
    } = req.body;
    const result = await pool.query(
      'UPDATE employment_operations SET employee_registry_id = $1, operation_type_id = $2, position_id= $3, department_id =$4,salary_change=$5,operation_date=$6 WHERE id = $7 RETURNING *',
      [
        employee_registry_id,
        operation_type_id,
        position_id,
        department_id,
        salary_change,
        operation_date,
        id,
      ],
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
exports.deleteOperations = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM employment_operations WHERE id = $1 RETURNING *',
      [id],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ошибка' });
    }
    res.status(200).json({ message: 'Ошибка при удалении' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
