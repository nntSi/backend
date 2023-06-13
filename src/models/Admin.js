module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    username: {type: DataTypes.STRING(255)},
    password: {type: DataTypes.STRING(255)},
    email: {type: DataTypes.STRING(255)},
    mobile: {type: DataTypes.STRING(10)},
    token: {type: DataTypes.STRING(255)},
    createdAt: {type: DataTypes.DATE},
    updatedAt: {type: DataTypes.DATE},
    active: {type: DataTypes.INTEGER}
  });
  return admin;
}