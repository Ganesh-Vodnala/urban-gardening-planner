const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes=require("./routes/auth");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Urban Gardening API Running");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend Connected Successfully" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});