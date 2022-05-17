



exports.responseInfoAdmin = (request, response, next) => {

    console.log(request.session)


    response.json(request.session.admin)


}