const DB = {
    "user": [
        {id:1, name: 'Martin'}
    ]
}

function list   (tabla) {
    return DB[tabla]
}
function get    (tabla, id) {
    let col = list(tabla);
    return col.filter( item => item.id === id )[0] || null;
}
function upsert (tabla, data) {
    DB[collection].push(data);
}
function remove (tabla, id) {
    return true;
}


module.exports = {
    list,
    get,
    upsert,
    remove,
}
