const router = require("express").Router();
const ControllerAddNameCat = require("../controllers/addCat.controller");



router.post("/add-categoty", ControllerAddNameCat.addNameCat);

module.exports = router;