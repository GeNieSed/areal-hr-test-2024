const { passportDetailsSchema } = require('../validators/passport-validator');
const pool = require('../config/db.js');

// просмотр всех данных
exports.readPassport = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM passport_details');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Добавление новой записи
exports.createPassport = async (req, res) => {
  try {
    const { error } = passportDetailsSchema.validate(req.body);
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    const {
      employee_id,
      first_name,
      last_name,
      middle_name,
      series,
      number,
      issue_date,
      issue_code,
      is_active,
      issued_by,
    } = req.body;
    const result = await pool.query(
      'INSERT INTO passport_details (employee_id, first_name, last_name, middle_name, series, number, issue_date, issue_code, is_active, issued_by ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [
        employee_id,
        first_name,
        last_name,
        middle_name,
        series,
        number,
        issue_date,
        issue_code,
        is_active,
        issued_by,
      ],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Обновление данных
exports.updatePassport = async (req, res) => {
  try {
    const { error } = passportDetailsSchema.validate(req.body);
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    const { id } = req.params;
    const {
      employee_id,
      first_name,
      last_name,
      middle_name,
      series,
      number,
      issue_date,
      issue_code,
      is_active,
      issued_by,
    } = req.body;
    const result = await pool.query(
      'UPDATE passport_details SET employee_id = $1, first_name = $2, last_name=$3, middle_name =$4, series=$5, number=$6, issue_date=$7, issue_code=$8, is_active=$9, issued_by=$10  WHERE id = $11 RETURNING *',
      [
        employee_id,
        first_name,
        last_name,
        middle_name,
        series,
        number,
        issue_date,
        issue_code,
        is_active,
        issued_by,
        id,
      ],
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
exports.deletePassport = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM positions WHERE id = $1 RETURNING *',
      [id],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Запись не найдена' });
    }
    res.status(200).json({ message: 'Паспорт успешно удален' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
