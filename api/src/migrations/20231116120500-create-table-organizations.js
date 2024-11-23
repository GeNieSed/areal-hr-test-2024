module.exports = {
  up: (pgm) => {
    pgm.createTable('organizations', {
      id: { type: 'serial', primaryKey: true },
      name: { type: 'varchar(150)', notNull: true },
      comment: { type: 'text', default: null },
    });
    pgm.sql(
      `
            INSERT INTO organizations (name, comment) VALUES
            ('ООО проммаш ', 'Любой комментарий'),
            ('ООО Кворт', 'Любой комментарий'),
            ('Мател', 'Любой комментарий'),
            ('Лазурит', 'Любой комментарий');
        `,
    );
  },
  down: (pgm) => {
    pgm.dropTable('organizations');
  },
};
