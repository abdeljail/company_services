const router = require("express").Router();
const ControllerCategories = require("../controllers/managementCategories.controller");

router.get("/all-categories", ControllerCategories.getAllCategories);

router.get("/one-category/:nameCategory", ControllerCategories.getOneCategory);

router.get("/all-categories/:numberCategories", ControllerCategories.getTenCategories);

router.post("/category/delete/",ControllerCategories.deleteCategory)

module.exports = router;