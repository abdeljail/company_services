const modelEdit = require("../../modules/formation/edit.module");
const fs = require('fs');

function deleteFile(img) {

  const path = './uploads/images/' + img

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path)
      console.log("skkkkkkkkkkkkkkkkkkkkkkkkkkk n             sisksksksks s ssk")
    }
  } catch (err) {
    console.error(err)
  }
}

exports.edit = (request, response, next) => {
  let name = Object.keys(request.body)[0]
  console.log(request.body.oldPath)
  let expr = {
    sel: null,
    id: request.body.id
  };
  if (request.file) {
    deleteFile(request.body.oldPath)
    expr.sel = "_image = '" + request.file.filename + "'";
  }
  else{
    switch (name) {
      case "name":
        expr.sel = "_name = '" + request.body[name] + "'";
        break;
      case "category":
        expr.sel = "_idCat =" + request.body[name] + "'";
        break;
      case "goals":
        expr.sel = "_Goals = '" + request.body[name] + "'";
        break;
      case "description":
        expr.sel = "_description = '" + request.body[name] + "'";
      default:
        console.log(` out of err.`);
    }
  }


  modelEdit.edit(expr).then(updated => {

    response.json(updated)


  }).catch(error => response.json(error))
};
