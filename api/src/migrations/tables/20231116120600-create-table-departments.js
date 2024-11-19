module.exports = {
    up: (pgm) => {
        pgm.createTable('departments', {
            id: { type: 'serial', primaryKey: true },
            organization_id: { type: 'integer', notNull: true },
            name: { type: 'varchar(100)', notNull: true },
            parent_department_id: { type: 'integer', default: null },
            comment: { type: 'text', default: null },
        });

        pgm.addConstraint('departments', 'fk_departments_organization', {
            foreignKeys: {
                columns: 'organization_id',
                references: 'organizations(id)',
                onDelete: 'CASCADE',
            },
        });

        pgm.addConstraint('departments', 'fk_departments_parent', {
            foreignKeys: {
                columns: 'parent_department_id',
                references: 'departments(id)',
                onDelete: 'SET NULL',
            },
        });
    },

    down: (pgm) => {
        pgm.dropTable('departments');
    },
};
