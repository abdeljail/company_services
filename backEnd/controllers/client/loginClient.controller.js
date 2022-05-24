const modelLoginClient = require("../../modules/client/loginClient.module");

exports.loginClient = (request, response, next) => {

    modelLoginClient.loginClient(request.body).then(client => {

        request.session.admin = client

        console.log(request.session);

        response.json(client)
    })
        .catch(error => response.json(error))
};
