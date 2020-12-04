// création du router Express pour ce module
const express = require("express");
const router = express.Router();

const ApiController = require("../controllers/ApiController");

router.post("/user/create", ApiController.user_create);

router.post("/place/create", ApiController.place_create);
router.get("/place/all", ApiController.place_get_all);

router.post("/grade/create", ApiController.grade_create);
router.get("/grade/:id", ApiController.grade_create);
router.get("/grade/all", ApiController.grade_get_all);

module.exports = router;