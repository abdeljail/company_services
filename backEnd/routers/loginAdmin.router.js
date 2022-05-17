const router = require("express").Router();
const ControllerLoginAdminn = require("../controllers/loginAdmin.controller");




router.post("/com-data", ControllerLoginAdminn.loginAdmin);


module.exports = router;