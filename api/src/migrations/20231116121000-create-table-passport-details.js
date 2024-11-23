module.exports = {
  up: (pgm) => {
    pgm.createTable('passport_details', {
      id: { type: 'serial', primaryKey: true },
      employee_id: { type: 'integer', notNull: true },
      first_name: { type: 'varchar(50)', notNull: true },
      last_name: { type: 'varchar(50)', notNull: true },
      middle_name: { type: 'varchar(50)', default: null },
      series: { type: 'varchar(4)', notNull: true },
      number: { type: 'varchar(6)', notNull: true },
      issue_date: { type: 'date', notNull: true },
      issue_code: { type: 'varchar(10)', notNull: true },
      is_active: { type: 'boolean', default: true },
      issued_by: { type: 'varchar(120)', default: null },
    });

    pgm.addConstraint('passport_details', 'fk_passport_employee', {
      foreignKeys: {
        columns: 'employee_id',
        references: 'employees(id)',
        onDelete: 'CASCADE',
      },
    });

    pgm.addConstraint(
      'passport_details',
      'unique_passport_employee_series_number',
      {
        unique: ['employee_id', 'series', 'number'],
      },
    );
    pgm.sql(
      `
            INSERT INTO passport_details (employee_id, first_name, last_name, middle_name, series, number, issue_date, issue_code, is_active, issued_by) VALUES
            (1, 'Денис', 'Заводовский', NULL, '3456', '123456', '2022-01-01', '123-456', true, 'Правительство ЯО'),
            (2, 'Егор', 'Иванов', NULL, '3456', '654321', '2023-02-01', '654-321', true, 'Правительство ЯО'),
            (3, 'Марк', 'Джексон', NULL, '3456', '111111', '2021-03-01', '111-222', true, 'Правительство ЯО'),
            (4, 'Лиза', 'Старк', NULL, '3456', '222222', '2020-04-01', '222-333', true, 'Правительство ЯО');
        `,
    );
  },
  down: (pgm) => {
    pgm.dropTable('passport_details');
  },
};
