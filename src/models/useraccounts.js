'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAccounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAccounts.belongsTo(models.Users, { foreignKey: 'userId', onDelete: 'CASCADE' })
    }
  };
  UserAccounts.init({
    userId: DataTypes.NUMBER,
    account: DataTypes.STRING,
    agency: DataTypes.STRING,
    balance: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'UserAccounts',
    paranoid: true
  });
  return UserAccounts;
};