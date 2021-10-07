`use strict`

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`)
    .then(() => {
      return queryInterface.createTable(`log_activities`, {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          allowNull: false,
          primaryKey: true
        },
        log_type_id: {
          type : Sequelize.UUID,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        data_log: {
          type: Sequelize.JSONB,
          allowNull: false,
          defaultValue: true
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
        created_by: {
          type: Sequelize.JSONB,
          allowNull: false
        },
        updated_by: {
          type: Sequelize.JSONB,
          allowNull : true
        },
        deleted_by: {
          type: Sequelize.JSONB,
          allowNull : true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull : false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull : true
        },
        deleted_at: {
          type: Sequelize.DATE,
          allowNull : true
        }
      })
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(`log_activities`)
  }
}
