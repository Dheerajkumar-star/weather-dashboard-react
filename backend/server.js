const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

function generateData() {
  return {
    temperature: Math.floor(Math.random() * 10) + 25,
    humidity: Math.floor(Math.random() * 40) + 40,
    light: Math.random() > 0.5 ? "ON" : "OFF",
    motion: Math.random() > 0.5 ? "Detected" : "None",
  };
}

app.get("/api/sensor", (req, res) => {
  res.json(generateData());
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
