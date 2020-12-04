const User = require("../models/user");
const Place = require("../models/place");
const Grade = require("../models/grade");

const user_create = (req, res) => {
  console.log("Create user");
  const nickname = req.body.nickname;
  const password = req.body.password;
  const mail = req.body.mail;

  const user = new User({
    nickname: nickname,
    password: password,
    mail: mail,
  });
  user
    .save()
    .then((result) => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false });
      console.log(err);
    });
};

const place_create = (req, res) => {
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const name = req.body.name;

  const place = new Place({
    latitude: latitude,
    longitude: longitude,
    name: name,
  });
  place
    .save()
    .then((result) => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false });
      console.log(err);
    });
};

const place_get_all = (req, res) => {
  Place.find().then((places) => {
    res.json(places);
  });
};

const grade_create = (req, res) => {
  const id_place = req.body.id_place;
  const id_user = req.body.longitude;
  const note = req.body.note;
  const comment = req.body.comment;

  const grade = new Grade({
    id_place: id_place,
    id_user: id_user,
    note: note,
    comment: comment,
  });
  grade
    .save()
    .then((result) => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false });
      console.log(err);
    });
};

const grade_get_all = (req, res) => {};

module.exports = {
  user_create,
  place_create,
  place_get_all,
  grade_create,
  grade_get_all,
};
