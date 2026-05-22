const express = require("express");

const router = express.Router();

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productsController");

const { validateProduct } = require("../middlewares/validateProduct");

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", validateProduct, createProduct);

router.put("/:id", validateProduct, updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;