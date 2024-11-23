module.exports = {
  up: (pgm) => {
    pgm.createTable('files', {
      id: { type: 'serial', primaryKey: true },
      employee_registry_id: { type: 'integer', notNull: true },
      file_name: { type: 'varchar(100)', notNull: true },
      file_path: { type: 'text', notNull: true },
    });

    pgm.addConstraint('files', 'fk_files_employee_registry', {
      foreignKeys: [
        {
          columns: 'employee_registry_id',
          references: 'employee_registry(id)',
          onDelete: 'CASCADE',
        },
      ],
    });
    pgm.sql(
      `
            INSERT INTO files (employee_registry_id, file_name, file_path) VALUES
            (1, 'Контакты.pdf', '/files/contract1.pdf'),
            (2, 'Алекс.pdf', '/files/resume2.pdf'),
            (3, 'Документы.pdf', '/files/report3.pdf'),
            (4, 'Таблицы.pdf', '/files/invoice4.pdf');
        `,
    );
  },
  down: (pgm) => {
    pgm.dropTable('files');
  },
};
