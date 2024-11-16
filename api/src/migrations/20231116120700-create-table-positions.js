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
    },

    down: (pgm) => {
        pgm.dropTable('positions');
    },
};
