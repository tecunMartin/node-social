const { nanoid } = require('nanoid');
const auth = require('../auth/auth-index');

const TABLA = 'users';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }

  function list() {
    return store.list(TABLA);
  }

  function get(id) {
    return store.get(TABLA, id);
  }

  // Creamos funcion para agregar un usuario
  async function add(body) {
    const user = {
      name: body.name,
      username: body.username,
    };

    if (body.id) {
      user.id = body.id;
    } else {
      user.id = nanoid();
    }

    if (body.password || body.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: body.password,
      });
    }
    return store.upsert(TABLA, user);
  }

  async function follow(from, to) {
    return await store.upsert(TABLA + '_follow', {
      user_from: from,
      user_to: to,
    });
  }

  async function following(user) {
    const join = {};
    join[TABLA] = 'user_to'; // {user: 'user_to'}
    const query = { user_from: user };
    return await store.query(TABLA + '_follow', query, join);
  }

  return {
    list,
    get,
    add,
    follow,
    following,
  };
};