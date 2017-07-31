module.exports = app => {
  const Sms = app.db.models.Sms;
  app.get("/sms", (req, res) => {
    Sms.findAll({}).then(sms => {
      res.json({ sms: sms });
    });
  });
};
