module.exports = {
    up: (pgm) => {
        pgm.createTable('operation_types', {
            id: { type: 'serial', primaryKey: true },
            name: { type: 'varchar(100)', notNull: true, unique: true },
        });
    },

    down: (pgm) => {
        pgm.dropTable('operation_types');
    },
};