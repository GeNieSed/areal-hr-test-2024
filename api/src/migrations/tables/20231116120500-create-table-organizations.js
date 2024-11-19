module.exports = {
    up: (pgm) => {
        pgm.createTable('organizations', {
            id: { type: 'serial', primaryKey: true },
            name: { type: 'varchar(150)', notNull: true },
            comment: { type: 'text', default: null },
        });
    },

    down: (pgm) => {
        pgm.dropTable('organizations');
    },
};
