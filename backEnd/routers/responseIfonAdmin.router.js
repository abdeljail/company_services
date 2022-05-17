const router = require("express").Router();
const responseInfoAdmin = require("../controllers/responseInfoAdmin.controller")



router.get("/info-admin",responseInfoAdmin.responseInfoAdmin)


module.exports = router;

// abdo22@gmail.com