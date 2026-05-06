const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "shubham",
  host: "localhost",
  database: "website_builder",
  password: "admin",
  port: 5432,
});

// DB connection check
pool.connect()
  .then(() => console.log("Connected to DB "))
  .catch(err => console.error("DB connection error ❌", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend running ");
});

// Save config API
app.post("/save-config", async (req, res) => {
  const { companyName, color, logoUrl } = req.body;

  if (!companyName || !color) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO website_config (company_name, theme_color, logo_url) VALUES ($1, $2, $3) RETURNING *",
      [companyName, color, logoUrl]
    );

      console.log(result.rows[0]); 


    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/get-config", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM website_config ORDER BY id DESC LIMIT 1"
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});