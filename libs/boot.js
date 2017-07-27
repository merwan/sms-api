module.exports = app => {
  const PORT = app.get("port");
  app.listen(PORT, () => {
    console.log(`SMS API - Port ${PORT}`)
  });
};
