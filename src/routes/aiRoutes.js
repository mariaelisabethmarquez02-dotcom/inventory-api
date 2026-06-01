const express = require("express");

const router = express.Router();

const {
  analyzeInventory
} = require("../controllers/aiController");

router.post("/analysis", analyzeInventory);

module.exports = router;