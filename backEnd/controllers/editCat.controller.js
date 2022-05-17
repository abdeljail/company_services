const modelEditNameCat = require("../modules/editCat.module");

exports.editNameCat = (request, response, next) => {

    modelEditNameCat.editNameCat(request.body).then(updated => {

        console.log(request.body);

        response.json(updated)


    }).catch(error => response.json(error))
};
