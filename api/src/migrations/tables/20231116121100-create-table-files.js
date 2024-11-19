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
                { columns: 'employee_registry_id', references: 'employee_registry(id)', onDelete: 'CASCADE' },
            ],
        });
    },
    down: (pgm) =>{
        pgm.dropTable('files');
    }
}