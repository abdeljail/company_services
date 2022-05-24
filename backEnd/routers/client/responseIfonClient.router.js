const router = require("express").Router();

const responseInfonClient = require("../../controllers/client/responseInfoClient.controller")

router.get("/",responseInfonClient.responseInfonClient)


module.exports = router;

// abdo22@gmail.com