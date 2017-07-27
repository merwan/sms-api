module.exports = app => {
  app.db.sync().done(() => {
    const PORT = app.get("port");
    app.listen(PORT, () => {
      console.log(`SMS API - Port ${PORT}`)
    });
  });
};
