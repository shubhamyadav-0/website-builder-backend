const { Pool } = require("pg");

const pool = new Pool({
  user: "shubham",
  host: "localhost",
  database: "website_builder",
  password: "admin",
  port: 5432,
});

module.exports = pool;