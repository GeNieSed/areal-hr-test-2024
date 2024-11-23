module.exports = {
  up: (pgm) => {
    pgm.createTable('employees', {
      id: { type: 'serial', primaryKey: true },
      gender: { type: 'varchar(10)', notNull: true },
      is_deleted: { type: 'boolean', default: false },
      hire_date: { type: 'date', notNull: true },
      birth_date: { type: 'date', notNull: true },
    });
    pgm.sql(
      `
            INSERT INTO employees (gender, is_deleted, hire_date, birth_date) VALUES
            ('Муж', false, '2023-01-01', '1990-05-15'),
            ('Жен', false, '2023-02-01', '1995-07-20'),
            ('Муж', false, '2023-03-01', '1985-08-10'),
            ('Жен', false, '2023-04-01', '1992-03-25');
        `,
    );
  },

  down: (pgm) => {
    pgm.dropTable('employees');
  },
};
