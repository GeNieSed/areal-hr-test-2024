const pool = require('../config/db.js');

// просмотр всех данных
exports.readIndex = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT \n' +
        '    employee_registry.id AS employee_registry_id,\n' +
        '    files.file_path AS photo_path,\n' +
        '    passport_details.last_name AS last_name,\n' +
        '    passport_details.first_name AS first_name,\n' +
        '    passport_details.middle_name AS middle_name,\n' +
        '    passport_details.issue_date AS birth_date,\n' +
        '    organizations.name AS organization_name,\n' +
        '    departments.name AS department_name,\n' +
        '    positions.name AS position_name\n' +
        'FROM \n' +
        '    employee_registry\n' +
        'LEFT JOIN \n' +
        '    files ON files.employee_registry_id = employee_registry.id\n' +
        'LEFT JOIN \n' +
        '    passport_details ON passport_details.employee_id = employee_registry.employee_id\n' +
        'LEFT JOIN \n' +
        '    employment_operations ON employment_operations.employee_registry_id = employee_registry.id\n' +
        'LEFT JOIN \n' +
        '    organizations ON organizations.id = employment_operations.department_id\n' +
        'LEFT JOIN \n' +
        '    departments ON departments.id = employment_operations.department_id\n' +
        'LEFT JOIN \n' +
        '    positions ON positions.id = employment_operations.position_id;',
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
