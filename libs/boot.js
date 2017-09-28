module.exports = app => {
  app.db.sequelize.sync().then(() => {
    if (process.env.NODE_ENV !== "test") {
      const PORT = app.get("port");
      app.listen(PORT, () => {
        console.log(`SMS API - Port ${PORT}`)
      });
    }
  });
};
