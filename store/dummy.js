const DB = {
    "user": [
        { id: "1", name: 'Martin' },
    ]
}

async function list   (tabla) {
    return DB[tabla];
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


module.exports = {
    list,
    get,
    upsert,
    remove,
}
