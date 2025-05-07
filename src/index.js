const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const tableRoutes = require("./routes/tableRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const requestRoutes = require("./routes/requestRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use(express.json());
app.use("/users", userRoutes);
app.use("/tables", tableRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/requests", requestRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);


app.get("/", (req, res) => {
    res.send("API corriendo correctamente");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
