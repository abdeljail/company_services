const modelLoginAdmin = require("../modules/loginAdmin.module");

exports.loginAdmin = (request, response, next) => {
    modelLoginAdmin.loginAdmin(request.body).then(admin => {


        request.session.admin = admin

        
        console.log(request.session);



        response.json(admin)
    })
        .catch(error => response.json(error))
};
