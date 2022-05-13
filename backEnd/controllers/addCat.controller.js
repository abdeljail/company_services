const modelAddNameCat = require("../modules/addCat.module");

exports.addNameCat = (request, response, next) => {
    modelAddNameCat.addNameCat(request.body).then(cat => {


        console.log(request.body);

        response.json(cat)

    }).catch(error => response.json(error))
};
