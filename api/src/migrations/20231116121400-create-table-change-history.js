module.exports = {
  up: (pgm) => {
    pgm.createTable('change_history', {
      id: { type: 'serial', primaryKey: true },
      timestamp: { type: 'timestamp', default: pgm.func('NOW()') },
      changed_by: { type: 'integer', default: null },
      object_type: { type: 'varchar(100)', notNull: true },
      changed_fields: { type: 'jsonb', notNull: true },
    });

    pgm.addConstraint('change_history', 'fk_change_history_user', {
      foreignKeys: [
        {
          columns: 'changed_by',
          references: 'users(id)',
          onDelete: 'SET NULL',
        },
      ],
    });
  },
  down: (pgm) => {
    pgm.dropTable('change_history');
  },
};
