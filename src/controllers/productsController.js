const Product = require("../models/product");

const getProducts = async (req, res) => {

  const products = await Product.findAll();

  res.status(200).json({
    ok: true,
    data: products
  });
};

const getProductById = async (req, res) => {

  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json({
      ok: false,
      error: "Producto no encontrado"
    });
  }

  res.json({
    ok: true,
    data: product
  });
};

const createProduct = async (req, res) => {

  const product = await Product.create(req.body);

  res.status(201).json({
    ok: true,
    data: product
  });
};

const updateProduct = async (req, res) => {

  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json({
      ok: false,
      error: "Producto no encontrado"
    });
  }

  await product.update(req.body);

  res.json({
    ok: true,
    data: product
  });
};

const deleteProduct = async (req, res) => {

  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json({
      ok: false,
      error: "Producto no encontrado"
    });
  }

  await product.destroy();

  res.status(204).send();
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};