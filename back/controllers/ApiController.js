const User = require("../models/user");
const Place = require("../models/place");

const user_create = (req, res) => {
    console.log("Create user")
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
    .then((result) => {})
    .catch((err) => {
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
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });
};

const place_get_all = (req, res) => {
  Place.find().then((places) => {
    res.json(places);
  });
};

const grade_create = (req, res) => {};

const grade_get_all = (req, res) => {};

module.exports = {
  user_create,
  place_create,
  place_get_all,
  grade_create,
  grade_get_all,
};
