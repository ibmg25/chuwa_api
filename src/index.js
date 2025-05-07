const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const tableRoutes = require("./routes/tableRoutes");

app.use(express.json());
app.use("/users", userRoutes);
app.use("/tables", tableRoutes);


app.get("/", (req, res) => {
    res.send("API corriendo correctamente");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
