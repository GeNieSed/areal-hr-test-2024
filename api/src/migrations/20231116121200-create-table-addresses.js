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
    },
    down: (pgm) =>{
        pgm.dropTable('addresses');
    }
}