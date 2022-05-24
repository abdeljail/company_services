
exports.responseInfonClient = (request, response, next) => {

    console.log(request.session)

    response.json({message:request.session.client})


}