module.exports = {
  up: (pgm) => {
    pgm.createTable('users', {
      id: { type: 'serial', primaryKey: true },
      login: { type: 'varchar(50)', notNull: true, unique: true },
      password_hash: { type: 'varchar(255)', notNull: true },
      users_information_id: { type: 'integer', notNull: true },
    });

    pgm.addConstraint('users', 'users_users_information_fk', {
      foreignKeys: [
        {
          columns: 'users_information_id',
          references: 'users_information(id)',
          onDelete: 'CASCADE',
        },
      ],
    });
  },
  down: (pgm) => {
    pgm.dropTable('users');
  },
};
