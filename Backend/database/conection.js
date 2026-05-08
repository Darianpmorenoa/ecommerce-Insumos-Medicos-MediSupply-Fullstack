const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.BD_CONNECTION,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;