const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.BD_CONNECTION,
  allowExitOnIdle: true
});

module.exports = pool;