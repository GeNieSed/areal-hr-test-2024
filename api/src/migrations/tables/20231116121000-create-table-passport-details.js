module.exports = {
    up: (pgm) => {

        pgm.createTable('passport_details', {
            id: { type: 'serial', primaryKey: true },
            employee_id: { type: 'integer', notNull: true },
            first_name: { type: 'varchar(50)', notNull: true },
            last_name: { type: 'varchar(50)', notNull: true },
            middle_name: { type: 'varchar(50)', default: null },
            series: { type: 'varchar(4)', notNull: true },
            number: { type: 'varchar(6)', notNull: true },
            issue_date: { type: 'date', notNull: true },
            issue_code: { type: 'varchar(10)', notNull: true },
            is_active: { type: 'boolean', default: true },
            issued_by: { type: 'varchar(120)', default: null },
        });

        pgm.addConstraint('passport_details', 'fk_passport_employee', {
            foreignKeys: {
                columns: 'employee_id',
                references: 'employees(id)',
                onDelete: 'CASCADE',
            },
        });

        pgm.addConstraint('passport_details', 'unique_passport_employee_series_number', {
            unique: ['employee_id', 'series', 'number'],
        });
    },
    down: (pgm) =>{
        pgm.dropTable('passport_details')
    }
}