const router = require("express").Router();
const ControllerEditNameCat = require("../controllers/editCat.controller");

router.post("/edit-categoty", ControllerEditNameCat.editNameCat);

module.exports = router;