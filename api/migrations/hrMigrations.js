const {addConstraint} = require("node-pg-migrate/operations/tables");
module.exports = {
    up: (pgm) => {
        // Таблица информации о пользователе
        pgm.createTable('users_information', {
            id: { type: 'serial', primaryKey: true },
            first_name: { type: 'varchar(50)', notNull: true },
            last_name: { type: 'varchar(50)', notNull: true },
            middle_name: { type: 'varchar(50)', notNull: false },
            role_id: { type: 'integer', notNull: false },
        });

        // Уникальное ограничение
        pgm.addConstraint('users_information', 'users_information_unique', {
            unique: ['last_name', 'first_name', 'middle_name'],
        });

        // Внешний ключ для role_id, связанный с таблицей roles
        pgm.addConstraint('users_information', 'users_information_role_fk', {
            foreignKeys: [
                {
                    columns: 'role_id',
                    references: 'roles(id)',
                    onDelete: 'CASCADE',
                },
            ],
        });


        // Таблица пользователей
        pgm.createTable('users', {
            id: { type: 'serial', primaryKey: true },
            login: { type: 'varchar(50)', notNull: true, unique: true },
            password_hash: { type: 'varchar(255)', notNull: true },
            users_information_id: { type: 'integer', notNull: true },
        });

        // Внешний ключ для users_information_id, связанный с таблицей users_information
        pgm.addConstraint('users', 'users_users_information_fk', {
            foreignKeys: [
                {
                    columns: 'users_information_id',
                    references: 'users_information(id)',
                    onDelete: 'CASCADE',
                },
            ],
        });


        // Таблица ролей
        pgm.createTable('roles', {
            id: { type: 'serial', primaryKey: true },
            title: { type: 'varchar(50)', notNull: true, unique: true },
        });


        // Таблица информации об организациях
        pgm.createTable('organizations ', {
            id: { type: 'serial', primaryKey: true },
            name: { type: 'varchar(100)', notNull: true},
        })


        // Таблица информации об отделах
        pgm.createTable('departments', {
            id: { type: 'serial', primaryKey: true },
            organization_id: { type: 'integer', notNull: true },
            name: { type: 'varchar(100)', notNull: true },
            parent_department_id: { type: 'integer', default: null },
            comment: { type: 'text', default: null },
        });
        pgm.addConstraint('departments', 'fk_departments_organization', {
            foreignKeys: [
                {
                    columns: 'organization_id',
                    references: 'organizations(id)',
                    onDelete: 'CASCADE',
                },
                {
                    columns: 'parent_department_id',
                    references: 'departments(id)',
                    onDelete: 'SET NULL',
                },
            ],
        });

        //Таблица positions
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
        pgm.addConstraint('positions', 'unique_department_name', {
            unique: ['department_id', 'name'],
        });

        //employees
        pgm.createTable('employees', {
            id: { type: 'serial', primaryKey: true },
            gender: { type: 'varchar(10)', notNull: true },
            is_deleted: { type: 'boolean', default: false },
            hire_date: { type: 'date', notNull: true },
            birth_date: { type: 'date', notNull: true },
        });

        //employee_registry
        pgm.createTable('employee_registry', {
            id: { type: 'serial', primaryKey: true },
            employee_id: { type: 'integer', notNull: true },
            position_id: { type: 'integer', notNull: true },
            department_id: { type: 'integer', notNull: true },
            organization_id: { type: 'integer', notNull: true },
        });
        pgm.addConstraint('employee_registry', 'fk_employee_registry', {
            foreignKeys: [
                {
                    columns: 'employee_id',
                    references: 'employees(id)',
                    onDelete: 'CASCADE',
                },
                {
                    columns: 'position_id',
                    references: 'positions(id)',
                    onDelete: 'CASCADE',
                },
                {
                    columns: 'department_id',
                    references: 'departments(id)',
                    onDelete: 'CASCADE',
                },
                {
                    columns: 'organization_id',
                    references: 'organizations(id)',
                    onDelete: 'CASCADE',
                },
            ],
        });

        //Таблица passport_details
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

        //Таблица files
        pgm.createTable('files', {
            id: { type: 'serial', primaryKey: true },
            employee_registry_id: { type: 'integer', notNull: true },
            passport_id: { type: 'integer', default: null },
            file_name: { type: 'varchar(100)', notNull: true },
            file_path: { type: 'text', notNull: true },
        });
        pgm.addConstraint('files', 'fk_files_employee_registry', {
            foreignKeys: [
                {
                    columns: 'employee_registry_id',
                    references: 'employee_registry(id)',
                    onDelete: 'CASCADE',
                },
                {
                    columns: 'passport_id',
                    references: 'passport_details(id)',
                    onDelete: 'CASCADE',
                },
            ],
        });

        //Таблица addresses
        pgm.createTable('addresses', {
            id: { type: 'serial', primaryKey: true },
            employee_id: { type: 'integer', notNull: true },
            region: { type: 'varchar(60)', notNull: true },
            city: { type: 'varchar(40)', notNull: true },
            street: { type: 'varchar(80)', notNull: true },
            building: { type: 'varchar(20)', notNull: true },
            apartment: { type: 'varchar(6)', default: null },
        });
        pgm.addConstraint('addresses', 'fk_addresses_employee', {
            foreignKeys: {
                columns: 'employee_id',
                references: 'employees(id)',
                onDelete: 'CASCADE',
            },
        });

        // 13. Таблица employment_operations
        pgm.createTable('employment_operations', {
            id: { type: 'serial', primaryKey: true },
            employee_registry_id: { type: 'integer', notNull: true },
            operation_type_id: { type: 'integer', notNull: true },
            position_id: { type: 'integer', default: null },
            department_id: { type: 'integer', default: null },
            salary_change: { type: 'numeric(12,2)', default: null },
            operation_date: { type: 'timestamp', default: pgm.func('NOW()') },
        });
        pgm.addConstraint('employment_operations', 'fk_employment_operations', {
            foreignKeys: [
                {
                    columns: 'employee_registry_id',
                    references: 'employee_registry(id)',
                    onDelete: 'CASCADE',
                },
                {
                    columns: 'operation_type_id',
                    references: 'operation_types(id)',
                    onDelete: 'CASCADE',
                },
                {
                    columns: 'position_id',
                    references: 'positions(id)',
                    onDelete: 'SET NULL',
                },
                {
                    columns: 'department_id',
                    references: 'departments(id)',
                    onDelete: 'SET NULL',
                },
            ],
        });

        // Таблица change_history
        pgm.createTable('change_history', {
            id: { type: 'serial', primaryKey: true },
            operation_id: { type: 'integer', default: null },
            timestamp: { type: 'timestamp', default: pgm.func('NOW()') },
            changed_by: { type: 'integer', default: null },
            object_type: { type: 'varchar(100)', notNull: true },
            changed_fields: { type: 'jsonb', notNull: true },
        });
        pgm.addConstraint('change_history', 'fk_change_history', {
            foreignKeys: [
                {
                    columns: 'operation_id',
                    references: 'employment_operations(id)',
                    onDelete: 'CASCADE',
                },
                {
                    columns: 'changed_by',
                    references: 'users(id)',
                    onDelete: 'SET NULL',
                },
            ],
        });


        pgm.createTable('operation_types', {
            id: { type: 'serial', primaryKey: true },
            name: { type: 'varchar(100)', notNull: true, unique: true },
        });
    },
};