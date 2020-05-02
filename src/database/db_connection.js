const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();


let connectionString = process.env.DATABASE_URL;
if(process.env.NODE_ENV !== "production")
    connectionString = process.env.DATABASE_TEST_URL;



if(!connectionString)
    throw new Error('Env variable DB_URL must be set');


const params = url.parse(connectionString);

const [username, password] = params.auth.split(':');

const options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    max: process.env.DB_MAX_CONNECTIONS || 2
};

if (username) { options.user = username; }
if (password) { options.password = password; }

options.ssl = (options.host !== 'localhost');

module.exports = new Pool(options);