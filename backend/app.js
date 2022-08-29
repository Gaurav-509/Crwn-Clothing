const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = 3005;

app.use(express.json());
connectDB();


const categoryRouter = require("./routes/categoryRoutes");
const productRouter = require("./routes/ProductRoutes");

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



module.exports = app;