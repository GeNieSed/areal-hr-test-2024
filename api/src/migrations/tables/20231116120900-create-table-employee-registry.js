module.exports = {
    up: (pgm) => {
        pgm.createTable('employee_registry',
            {
            id: { type: 'serial', primaryKey: true },
            employee_id: { type: 'integer', notNull: true },
            position_id: { type: 'integer', notNull: true },
            department_id: { type: 'integer', notNull: true },
            organization_id: { type: 'integer', notNull: true },
        });

        pgm.addConstraint('employee_registry', 'fk_employee_registry_employee', {
            foreignKeys: [
                {
                    columns: 'employee_id',
                    references: 'employees(id)',
                    onDelete: 'CASCADE'
                },
            ],
        });

        pgm.addConstraint('employee_registry', 'fk_employee_registry_position', {
            foreignKeys: [
                {
                    columns: 'position_id',
                    references: 'positions(id)',
                    onDelete: 'CASCADE'
                },
            ],
        });

        pgm.addConstraint('employee_registry', 'fk_employee_registry_department', {
            foreignKeys: [
                {
                    columns: 'department_id',
                    references: 'departments(id)',
                    onDelete: 'CASCADE'
                },
            ],
        });

        pgm.addConstraint('employee_registry', 'fk_employee_registry_organization', {
            foreignKeys: [
                {
                    columns: 'organization_id',
                    references: 'organizations(id)',
                    onDelete: 'CASCADE'
                },
            ],
        });
    },

    down: (pgm) => {
        pgm.dropTable('employee_registry');
    },
};
