module.exports = {
  up: (pgm) => {
    // Удаление записей
    pgm.dropColumn('employment_operations', ['changed_fields', 'changed_by']);
  },
  down: (pgm) => {
    // Восстановление столбцов
    pgm.addColumn('employment_operations', {
      changed_fields: { type: 'json', notNull: false },
      changed_by: { type: 'integer', notNull: false },
    });
  },
};
