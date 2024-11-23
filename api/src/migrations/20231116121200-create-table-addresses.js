module.exports = {
  up: (pgm) => {
    pgm.createTable('addresses', {
      id: { type: 'serial', primaryKey: true },
      employee_id: { type: 'integer', notNull: true },
      region: { type: 'varchar(60)', notNull: true },
      city: { type: 'varchar(40)', notNull: true },
      street: { type: 'varchar(80)', notNull: true },
      building: { type: 'varchar(20)', notNull: true },
      apartment: { type: 'varchar(6)', default: null },
    });

    pgm.addConstraint('addresses', 'fk_addresses_employee', {
      foreignKeys: {
        columns: 'employee_id',
        references: 'employees(id)',
        onDelete: 'CASCADE',
      },
    });
    pgm.sql(
      `
            INSERT INTO addresses (employee_id, region, city, street, building, apartment) VALUES
            (1, 'Ярославлская область 1', 'Ярославль', 'Свобода 1', 'что-то 1', 'что-то'),
            (2, 'Ярославлская область', 'Ярославль', 'Свобода 2', 'что-то 2', NULL),
            (3, 'Ярославлская область', 'Ярославль', 'Свобода 3', 'что-то 3', 'что-то'),
            (4, 'Ярославлская область', 'Ярославль', 'Свобода 4', 'что-то 4', NULL);
        `,
    );
  },
  down: (pgm) => {
    pgm.dropTable('addresses');
  },
};
