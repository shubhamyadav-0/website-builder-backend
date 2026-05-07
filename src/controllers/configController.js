const repository = require("../repository/configRepository");

const saveConfig = async (req, res) => {
  try {
    const data = await repository.saveConfig(req.body);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const getConfig = async (req, res) => {
  try {
    const data = await repository.getLatestConfig();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  saveConfig,
  getConfig,
};