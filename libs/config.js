module.exports = {
  database: "sms",
  username: "postgres",
  password: "",
  params: {
    host: "db",
    dialect: "postgres",
    define: {
      underscored: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || '$M5-ap1',
    session: { session: false }
  }
};
