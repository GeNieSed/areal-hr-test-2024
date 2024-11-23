module.exports = {
  up: (pgm) => {
    pgm.createTable('departments', {
      id: { type: 'serial', primaryKey: true },
      organization_id: { type: 'integer', notNull: true },
      name: { type: 'varchar(100)', notNull: true },
      parent_department_id: { type: 'integer', default: null },
      comment: { type: 'text', default: null },
    });

    pgm.addConstraint('departments', 'fk_departments_organization', {
      foreignKeys: {
        columns: 'organization_id',
        references: 'organizations(id)',
        onDelete: 'CASCADE',
      },
    });

    pgm.addConstraint('departments', 'fk_departments_parent', {
      foreignKeys: {
        columns: 'parent_department_id',
        references: 'departments(id)',
        onDelete: 'SET NULL',
      },
    });
    pgm.sql(
      `
            INSERT INTO departments (organization_id, name, parent_department_id, comment) VALUES
            (1, 'HR', NULL, 'Любой комментарий'),
            (1, 'Разработка', NULL, 'Любой комментарий'),
            (2, 'Дизайн', NULL, 'Любой комментарий'),
            (2, 'Маркетинг', NULL, 'Любой комментарий');
        `,
    );
  },

  down: (pgm) => {
    pgm.dropTable('departments');
  },
};
