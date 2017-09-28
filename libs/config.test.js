module.exports = {
  database: "sms_test",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "",
  params: {
    host: process.env.DB_HOST || "db",
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
