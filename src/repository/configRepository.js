const pool = require("../database/db");

const saveConfig = async (data) => {
  const {
    companyName,
    color,
    logoUrl,
    heroTitle,
    heroDescription,
    buttonText,
  } = data;

  const result = await pool.query(
    `INSERT INTO website_config
    (
      company_name,
      theme_color,
      logo_url,
      hero_title,
      hero_description,
      button_text
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`,
    [
      companyName,
      color,
      logoUrl,
      heroTitle,
      heroDescription,
      buttonText,
    ]
  );

  return result.rows[0];
};

const getLatestConfig = async () => {
  const result = await pool.query(
    "SELECT * FROM website_config ORDER BY id DESC LIMIT 1"
  );

  return result.rows[0];
};

module.exports = {
  saveConfig,
  getLatestConfig,
};