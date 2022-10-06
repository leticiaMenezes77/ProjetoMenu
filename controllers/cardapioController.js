function list (request, response){
    response.render('menu/cardapio');
}
function show (request, response){
    const {id} = request.params;

    response.send('menu ID: ' + id);
}
function  create_form (request, response){
    response.send('menu/abrir_form');
}
function create (request, response){
    response.send('create save');
}
function update (request, response){
   response.send('update save');
}
function update_form (request, response) {
   response.send('update save');
}
function _delete_form (request, response) {
    response.send('delete form');
}
function _delete (request, response){
    response.send('delete save');
}

module.exports = { list, show, create_form, create, update_form, update, _delete, _delete_form }