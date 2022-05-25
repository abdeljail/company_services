const router = require("express").Router();
const multer = require('multer')

const ControllerApplication = require("../../controllers/application/add.controller")


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {


            let type = file.mimetype === "application/pdf" ? "./uploads/pdfs" : "./uploads/images"

            console.log(file)

            cb(null, type);
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        },
    }),
});


router.post("/add-application", upload.single('file'), ControllerApplication.addApplication)


module.exports = router;