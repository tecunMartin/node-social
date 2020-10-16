const { error } = require('../../../network/response');

const TABLA = 'post';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }

  // Funcion para listar todos los post.
  function list() {
    return store.list(TABLA);
  }

  // Funcion para agragar post
  function add(user, { text }) {
    const post = {
      user,
      text,
    };
    return store.upsert(TABLA, post);
  }

  // Funcion para listar un solo post.
  function get(id) {
    return store.get(TABLA, id);
  }

  // Funcion para elimnar un post.
  function remove(id) {
    if (id) {
      return store.remove(TABLA, id);
    } else {
      throw Error('No se puede encontrar el id');
    }
  }

  return {
    list,
    add,
    get,
    remove,
  };
};
