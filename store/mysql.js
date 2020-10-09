const mysql = require('mysql');
const config = require('../config');
const chalk = require('chalk');
const { bgGreenBright } = require('chalk');

const dbConf = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

let connection;
function handleCon() {
  connection = mysql.createConnection(dbConf);
  connection.connect((err) => {
    if (err) {
      console.error('[db errr]', err);
      setTimeout(() => {
        handleCon;
      }, 2000);
    } else {
      console.log(bgGreenBright.black('BD Connected!'));
    }
  });
  connection.on('error', (err) => {
    console.error('[db err]', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleCon();
    } else {
      throw err;
    }
  });
}

handleCon();

/* Lista todos los usuarios de la DB */
function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

/* Lista solo un usuario de la DB */
function get(table, id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id = ${id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

/* Funcion para insertar datos a la DB */
function insert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

/* Funcion encargada de modificar */
function update(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

/* Funcion encargada de despachar un insert o un update */
async function upsert(table, data) {
  let row = [];
  if (data.id) {
    row = await get(table, data.id);
  }
  if (row.length === 0) {
    return insert(table, data);
  } else {
    return update(table, data);
  }
}

function query(table, query) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err, res) => {
      if (err) return reject(err);
      resolve(res[0] || null);
    });
  });
}

module.exports = {
  list,
  get,
  upsert,
  query,
};
