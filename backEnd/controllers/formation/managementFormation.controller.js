const modelManagementFormation = require("../../modules/formation/managementFormation.module");

exports.getAllFormations = (request, response, next) => {

    modelManagementFormation.allFormations().then(categories => {

        console.log(categories)

        response.json(categories)

    }).catch(error => response.json(error))
};


exports.getOneFormation = (request, response, next) => {

    modelManagementFormation.OneFormation(request.params).then(category => {

        console.log(category)

        response.json(category)

    }).catch(error => response.json(error))

}


exports.getTenFormation = (request, response, next) => {

    modelManagementFormation.tenFormation(request.params).then(categories => {

        console.log(categories)

        response.json(categories)

    }).catch(error => response.json(error))
};

exports.deleteFormation = (request, response, next) => {

    modelManagementFormation.deleteFormation(request.body).then(dlt => {

        response.json(dlt)
        console.log(dlt)

    }).catch(error => response.json(error))
};