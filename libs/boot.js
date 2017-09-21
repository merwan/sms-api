module.exports = app => {
  if (process.env.NODE_ENV !== "test") {
    app.db.sequelize.sync().done(() => {
      const PORT = app.get("port");
      app.listen(PORT, () => {
        console.log(`SMS API - Port ${PORT}`)
      });
    });
  }
};
