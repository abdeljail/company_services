const router = require("express").Router();
const ControllerFormation = require("../../controllers/formation/add.controller");
// const path = require("path");
const multer = require('multer')

// cb(null, path.join(__dirname, "uploads"));


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "./uploads/images");
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        },
    }),
});


router.get("/all-categories", ControllerFormation.getAllCategories);

// ControllerFormation.addFormation
router.post("/add-formation", upload.single('file'), ControllerFormation.addFormation)


module.exports = router;