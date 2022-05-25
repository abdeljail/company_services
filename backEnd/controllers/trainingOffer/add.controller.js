const modelTraining = require("../../modules/trainingOffer/add.module");

exports.addTraining = (request, response, next) => {


    modelTraining.addTraining(request.body).then(res => {

        response.json(res)

    }).catch(error => response.json(error))
};