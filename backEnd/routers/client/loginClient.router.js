const router = require("express").Router();
const ControllerLoginClient = require("../../controllers/client/loginClient.controller");




router.post("/", ControllerLoginClient.loginClient);


module.exports = router;