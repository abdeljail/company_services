const modelMassage = require("../../modules/contactus/add.module");
exports.addMessage = (request, response, next) => {


    modelMassage.addMessage(request.body).then(message => {

        response.json(message)

    }).catch(error => response.json(error))
};