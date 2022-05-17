const modelCategories = require("../modules/managementCategories.module");

exports.getAllCategories = (request, response, next) => {

    modelCategories.allCategories().then(categories => {

        console.log(categories)

        response.json(categories)

    }).catch(error => response.json(error))
};


exports.getOneCategory = (request, response, next) => {

    modelCategories.OneCategory(request.params).then(category => {

        console.log(category)

        response.json(category)

    }).catch(error => response.json(error))

}


exports.getTenCategories = (request, response, next) => {

    modelCategories.tenCategories(request.params).then(categories => {

        console.log(categories)

        response.json(categories)

    }).catch(error => response.json(error))
};

exports.deleteCategory = (request, response, next) => {

    modelCategories.deleteCategory(request.body).then(dlt => {

        response.json(dlt)

    }).catch(error => response.json(error))
};