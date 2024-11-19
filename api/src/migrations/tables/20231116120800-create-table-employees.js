module.exports = {
    up: (pgm) => {
        pgm.createTable('employees', {
            id: { type: 'serial', primaryKey: true },
            gender: { type: 'varchar(10)', notNull: true },
            is_deleted: { type: 'boolean', default: false },
            hire_date: { type: 'date', notNull: true },
            birth_date: { type: 'date', notNull: true },
        });
    },

    down: (pgm) => {
        pgm.dropTable('employees');
    },
};
