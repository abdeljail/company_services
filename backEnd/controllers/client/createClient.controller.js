const modelCreateClient = require("../../modules/client/createClient.module");

exports.createClient = (request, response, next) => {

    modelCreateClient.createClient(request.body).then(cat => {


        request.session.client = request.body


        console.log("client created", request.session.client)


        response.json(cat)

    }).catch(error => response.json(error))
};