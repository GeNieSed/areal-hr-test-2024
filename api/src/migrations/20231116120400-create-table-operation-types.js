module.exports = {
  up: (pgm) => {
    pgm.createTable('operation_types', {
      id: { type: 'serial', primaryKey: true },
      name: { type: 'varchar(100)', notNull: true, unique: true },
    });
    pgm.sql(
      `
            INSERT INTO operation_types (name) VALUES
            ('Уволен'),
            ('Больничный'),
            ('Отпуск'),
            ('Работает');
        `,
    );
  },

  down: (pgm) => {
    pgm.dropTable('operation_types');
  },
};
