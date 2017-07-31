module.exports = (sequelize, DataType) => {
  const Sms = sequelize.define("Sms", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });
  Sms.associate = models => {
    Sms.belongsTo(models.Users);
  };
  return Sms;
};
