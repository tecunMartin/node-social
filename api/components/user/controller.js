const TABLA = 'user';
module.exports = function (injectedStore) {
    let store = injectedStore;
    if ( !store ) {
       store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }
    
    function get(id) {
        return store.get(TABLA, id);
    }

    // Creamos funcion para agregar un usuario
    function add( id, UserName ) {
        if ( !UserName || !id ) {
            return Promise.reject('NO VIENE EL NOMBRE.');
        }
        const user = {
            id: id,
            name: UserName
        }
        return store.upsert(TABLA, user)
    }

    return {
        list,
        get,
        add,
    }
}