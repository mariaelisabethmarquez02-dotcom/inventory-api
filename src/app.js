const express = require("express");

const morgan = require("morgan");

const sequelize = require("./config/bd_postgre");

const productsRoutes = require("./routes/productsRoutes");

const { notFound } = require("./middlewares/notFound");

const { errorHandler } = require("./middlewares/errorHandler");

const { PORT } = require("./config/env");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/products", productsRoutes);

app.use(notFound);

app.use(errorHandler);

sequelize.authenticate()
  .then(() => {
    console.log("Conexión a PostgreSQL exitosa");
  })
  .catch((error) => {
    console.error("Error de conexión:", error);
  });

sequelize.sync()
  .then(() => {
    console.log("Modelos sincronizados");
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});