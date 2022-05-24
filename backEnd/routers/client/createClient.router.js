const router = require("express").Router();

const ControllerCreateClient = require("../../controllers/client/createClient.controller")


router.post("/", ControllerCreateClient.createClient)


module.exports = router;