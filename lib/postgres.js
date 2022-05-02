const pgPromise = require('pg-promise');
const { config } = require('../config');
const pgp = pgPromise({});

const connectionData = {
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.DB_NAME,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    "dialectOptions": {
        "ssl": true
      }
};
const uri_pg = `postgres://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`;

const db = pgp(connectionData);
exports.db = db;