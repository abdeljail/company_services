const router = require("express").Router();
const ControllerAddMessage = require("../../controllers/contactUs/add.controller");



router.post("/", ControllerAddMessage.addMessage);

module.exports = router;