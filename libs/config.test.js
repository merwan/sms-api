module.exports = {
  database: "sms_test",
  username: "postgres",
  password: "",
  params: {
    host: "db",
    dialect: "postgres",
    logging: false,
    define: {
      underscored: true
    }
  },
  jwt: {
    secret: "SMS_TEST",
    session: { session: false }
  }
};
