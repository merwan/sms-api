module.exports = app => {
  const Sms = app.db.models.Sms;

  app.route("/sms")
    .all(app.auth.authenticate())
    .get((req, res) => {
      Sms.findAll({
        where: { user_id: req.user.id }
      })
        .then(result => res.json(result))
        .catch(error => {
          res.status(422).json({ msg: error.message });
        });
    })
    .post((req, res) => {
      req.body.user_id = req.user.id;
      Sms.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(422).json({ msg: error.message });
        });
    });

  app.route("/sms/:id")
    .all(app.auth.authenticate())
    .get((req, res) => {
      Sms.findOne({
        where: {
          id: req.params.id,
          user_id: req.user.id
        }
      })
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
