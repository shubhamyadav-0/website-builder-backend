const express = require("express");
const router = express.Router();

const controller = require("../controllers/configController");

router.post("/save-config", controller.saveConfig);
router.get("/get-config", controller.getConfig);

module.exports = router;