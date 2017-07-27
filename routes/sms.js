module.exports = app => {
  app.get("/sms", (req, res) => {
    res.json({
      sms: [
        { message: "Hi there!" },
        { message: "OK, thanks" }
      ]
    });
  });
};
