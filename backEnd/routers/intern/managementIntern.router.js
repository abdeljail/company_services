const router = require("express").Router();

const ControllerManagementIntern = require("../../controllers/intern/managementIntern.controller");

router.get("/all-Intern", ControllerManagementIntern.getAllIntern);

router.get("/all-Intern/:numberIntern", ControllerManagementIntern.getTenIntern);

router.post("/delete/", ControllerManagementIntern.deleteIntern)


module.exports = router;