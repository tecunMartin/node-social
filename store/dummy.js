const DB = {
    "user": [
        { id: "1", name: 'Martin' },
    ]
}

async function list   (tabla) {
    return DB[tabla] || [];
}

async function get    (tabla, id) {
    let col = await list(tabla);
    return col.filter( item => item.id === id )[0] || null;
}

async function upsert (tabla, data) {

    if ( !DB[tabla] ) {
        DB[tabla] = [];
    }

    DB[tabla].push(data);
    console.log(DB);
}

async function remove (tabla, id) {
    return true;
}

async function query( tabla, q ) {
    let col     = await list(tabla);
    let keys    = Object.keys(q);
    let key     = keys[0];
    return col.filter(item => item[key] === q[key])[0] || null;
}


module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
}
