const { nanoid }    = require('nanoid');
const bodyParser    = require('body-parser');
const auth          = require('../auth');

const TABLA         = 'users';
module.exports      = function (injectedStore) {
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
    async function add( body ) {
        const user = {
            name: body.name,
            username: body.username
        }
        if ( body.id ) {
            user.id = body.id
        } else {
            user.id = nanoid();
        }

        if ( body.password || body.username ) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            })
        }

        return store.upsert(TABLA, user)
    }

    return {
        list,
        get,
        add,
    }
}