const router = require("express").Router();
const multer = require('multer')
const ControllerEdit = require("../../controllers/formation/edit.controller");
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
router.post("/edit-formation", upload.single('image'), ControllerEdit.edit);

module.exports = router;