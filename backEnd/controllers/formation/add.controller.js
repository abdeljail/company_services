const modelFormation = require("../../modules/formation/add.module");


exports.getAllCategories = (request, response, next) => {

    modelFormation.allCategories().then(categories => {

        console.log(categories)

        response.json(categories)

    }).catch(error => response.json(error))
};


exports.addFormation = (request, response, next) => {

    const image = request.file.filename

    modelFormation.addFormation({ ...request.body, image }).then(cat => {

        console.log({ ...request.body, image })

        response.json(cat)

    }).catch(error => response.json(error))
};