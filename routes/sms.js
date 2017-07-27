module.exports = app => {
  const Sms = app.models.sms;
  app.get("/sms", (req, res) => {
    Sms.findAll({}, (sms) => {
      res.json({ sms: sms });
    });
  });
};
