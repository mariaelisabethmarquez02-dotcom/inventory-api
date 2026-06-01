const express = require("express");

const morgan = require("morgan");

const cors = require("cors");

const sequelize = require("./config/bd_postgre");

const productsRoutes = require("./routes/productsRoutes");

const { notFound } = require("./middlewares/notFound");

const aiRoutes = require("./routes/aiRoutes");

const { errorHandler } = require("./middlewares/errorHandler");

const { PORT } = require("./config/env");

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/products", productsRoutes);

app.use("/ai", aiRoutes);

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