module.exports = {
    up: (pgm) => {
        pgm.createTable('roles', {
            id: { type: 'serial', primaryKey: true },
            title: { type: 'varchar(70)', notNull: true, unique: true },
        });
    },
    down: (pgm) =>{
        pgm.dropTable('roles');
    }
}