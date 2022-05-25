const modelApplication = require("../../modules/application/add.module");

exports.addApplication = (request, response, next) => {


    console.log(request.body)
    console.log(request.file)

    let obj = {
        idC: +request.body.idC,
        cv: request.file.filename,
        name: request.body.type === "employment" ? "_recruitment" : "_internship"
    }


    modelApplication.addApplication(obj).then(application => {

        response.json(application)

    }).catch(error => response.json(error))
};