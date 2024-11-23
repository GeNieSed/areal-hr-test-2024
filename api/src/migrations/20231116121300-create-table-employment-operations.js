module.exports = {
  up: (pgm) => {
    pgm.createTable('employment_operations', {
      id: { type: 'serial', primaryKey: true },
      employee_registry_id: { type: 'integer', notNull: true },
      operation_type_id: { type: 'integer', notNull: true },
      position_id: { type: 'integer', default: null },
      department_id: { type: 'integer', default: null },
      salary_change: { type: 'numeric(12,2)', default: null },
      operation_date: { type: 'timestamp', default: pgm.func('NOW()') },
    });

    pgm.addConstraint(
      'employment_operations',
      'fk_employment_operations_registry',
      {
        foreignKeys: [
          {
            columns: 'employee_registry_id',
            references: 'employee_registry(id)',
            onDelete: 'CASCADE',
          },
        ],
      },
    );

    pgm.addConstraint(
      'employment_operations',
      'fk_employment_operations_type',
      {
        foreignKeys: [
          {
            columns: 'operation_type_id',
            references: 'operation_types(id)',
            onDelete: 'CASCADE',
          },
        ],
      },
    );

    pgm.addConstraint(
      'employment_operations',
      'fk_employment_operations_position',
      {
        foreignKeys: [
          {
            columns: 'position_id',
            references: 'positions(id)',
            onDelete: 'SET NULL',
          },
        ],
      },
    );

    pgm.addConstraint(
      'employment_operations',
      'fk_employment_operations_department',
      {
        foreignKeys: [
          {
            columns: 'department_id',
            references: 'departments(id)',
            onDelete: 'SET NULL',
          },
        ],
      },
    );
    pgm.sql(
      `
            INSERT INTO employment_operations (id, employee_registry_id, operation_type_id, position_id, department_id, salary_change, operation_date) VALUES
            (1, 1, 1, 1, 1, 1000.00, '2023-05-01'),
            (2, 2, 2, 2, 1, 2000.00, '2023-06-01'),
            (3, 3, 3, 3, 2, 1500.00, '2023-07-01'),
            (4, 4, 4, 4, 2, 2500.00, '2023-08-01');
        `,
    );
  },
  down: (pgm) => {
    pgm.dropTable('employment_operations');
  },
};
