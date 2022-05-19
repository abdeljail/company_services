const router = require("express").Router();

const ControllerManagementFormation = require("../../controllers/formation/managementFormation.controller");

router.get("/all-formation", ControllerManagementFormation.getAllFormations);

router.get("/one-formation/:nameFormation", ControllerManagementFormation.getOneFormation);

router.get("/all-formation/:numberFormation", ControllerManagementFormation.getTenFormation);

router.post("/delete/",ControllerManagementFormation.deleteFormation)


module.exports = router;