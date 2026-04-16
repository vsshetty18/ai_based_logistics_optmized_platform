const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/predict", (req, res) => {
  const { distance, traffic, weather } = req.body;

  let score = 0;

  // Simple AI logic
  if (distance > 300) score += 30;
  if (traffic === "high") score += 40;
  if (weather === "bad") score += 30;

  let risk = "Low";
  if (score > 60) risk = "High";
  else if (score > 30) risk = "Medium";

  res.json({
    delayProbability: score,
    riskLevel: risk
  });
});

app.get("/", (req, res) => {
  res.send("Logistics API Running");
});

app.listen(5000, () => console.log("Server running on port 5000"));
