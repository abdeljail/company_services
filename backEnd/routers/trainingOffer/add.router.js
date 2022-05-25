const router = require("express").Router();
const ControllerTraining = require("../../controllers/trainingOffer/add.controller")



router.post("/add-training", ControllerTraining.addTraining)


module.exports = router;