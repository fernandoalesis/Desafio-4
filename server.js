const express = require("express");
const productsRouter = require("./routes/products");

const app = express();

app.listen(8080, () => console.log("server listening on port 8080"));

//Para recibir datos en formato json

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", productsRouter);

// posibles rutas
// http://localhost:8080/api/productos/
