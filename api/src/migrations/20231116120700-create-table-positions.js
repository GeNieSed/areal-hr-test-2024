module.exports = {
  up: (pgm) => {
    pgm.createTable('positions', {
      id: { type: 'serial', primaryKey: true },
      department_id: { type: 'integer', notNull: true },
      name: { type: 'varchar(100)', notNull: true },
    });

    pgm.addConstraint('positions', 'fk_positions_department', {
      foreignKeys: {
        columns: 'department_id',
        references: 'departments(id)',
        onDelete: 'CASCADE',
      },
    });
    pgm.sql(
      `
            INSERT INTO positions (department_id, name) VALUES
            (1, 'HR специалист'),
            (1, 'Программист'),
            (2, 'Веб-дизайнер'),
            (2, 'Маркетолог');
        `,
    );
  },

  down: (pgm) => {
    pgm.dropTable('positions');
  },
};
