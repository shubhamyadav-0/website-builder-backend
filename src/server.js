const express = require("express");
const cors = require("cors");

const configRoutes = require("./routes/configRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", configRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});