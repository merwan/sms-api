module.exports = app => {
  const Sms = app.db.models.Sms;
  app.route("/sms")
    .get((req, res) => {
      Sms.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(422).json({ msg: error.message });
        });
    })
    .post((req, res) => {
      Sms.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(422).json({ msg: error.message });
        });
    });

  app.route("/sms/:id")
    .get((req, res) => {
      Sms.findOne({ where: req.params })
        .then(result => {
          if (result) {
            res.json(result);
          } else {
            res.sendStatus(404);
          }
        })
        .catch(error => {
          res.status(422).json({ msg: error.message });
        });
    });
};
