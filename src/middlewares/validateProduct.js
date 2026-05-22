function validateProduct(req, res, next) {

  const { name, price, stock, category } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({
      ok: false,
      error: "Nombre inválido"
    });
  }

  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      ok: false,
      error: "Precio inválido"
    });
  }

  if (typeof stock !== "number" || stock < 0) {
    return res.status(400).json({
      ok: false,
      error: "Stock inválido"
    });
  }

  if (!category) {
    return res.status(400).json({
      ok: false,
      error: "Categoría requerida"
    });
  }

  next();
}

module.exports = { validateProduct };