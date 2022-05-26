const modelManagementIntern = require("../../modules/intern/managementIntern.module");

exports.getAllIntern = (request, response, next) => {

    modelManagementIntern.allIntern().then(intern => {

        console.log(intern)

        response.json(intern)

    }).catch(error => response.json(error))
};


exports.getTenIntern = (request, response, next) => {

    modelManagementIntern.tenIntern(request.params).then(intern => {

        console.log(intern)

        response.json(intern)

    }).catch(error => response.json(error))
};

exports.deleteIntern = (request, response, next) => {

    modelManagementIntern.deleteIntern(request.body).then(dlt => {

        response.json(dlt)
        console.log(dlt)

    }).catch(error => response.json(error))
};