const { addressSchema } = require('../validators/addresses-validator');
const pool = require('../config/db.js');

// просмотр всех данных
exports.readAddresses = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM addresses');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Добавление новой записи
exports.createAddresses = async (req, res) => {
  try {
    const { error } = addressSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const { employee_id, region, city, street, house, building, apartment } =
      req.body;
    const result = await pool.query(
      'INSERT INTO addresses (employee_id, region, city, street, house, building, apartment) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [employee_id, region, city, street, house, building, apartment],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Обновление данных
exports.updateAddresses = async (req, res) => {
  try {
    const { error } = addressSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const { id } = req.params;
    const { employee_id, region, city, street, house, building, apartment } =
      req.body;
    const result = await pool.query(
      'UPDATE addresses SET employee_id = $1, region = $2, city = $3 ,street = $4, house =$5, building = $6, apartment = $7  WHERE id = $8 RETURNING *',
      [employee_id, region, city, street, house, building, apartment, id],
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
exports.deleteAddresses = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM addresses WHERE id = $1 RETURNING *',
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
