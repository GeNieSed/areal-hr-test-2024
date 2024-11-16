module.exports = {
    up: (pgm) => {
        pgm.createTable('users_information', {
            id: { type: 'serial', primaryKey: true },
            first_name: { type: 'varchar(50)', notNull: true },
            last_name: { type: 'varchar(50)', notNull: true },
            middle_name: { type: 'varchar(50)', default: null },
            role_id: { type: 'integer', default: null },
        });

        pgm.addConstraint('users_information', 'users_information_unique', {
            unique: ['last_name', 'first_name', 'middle_name'],
        });

        pgm.addConstraint('users_information', 'users_information_role_fk', {
            foreignKeys: [
                {
                    columns: 'role_id',
                    references: 'roles(id)',
                    onDelete: 'CASCADE',
                },
            ],
        });
    },
    down: (pgm) => {
        pgm.dropTable('users_information');
    },
};
