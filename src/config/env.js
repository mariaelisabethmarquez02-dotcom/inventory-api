const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

module.exports = {
  PORT,
  GEMINI_API_KEY
};