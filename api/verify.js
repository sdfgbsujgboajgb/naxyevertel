// server.js (Node.js + Express)
import express from "express";
const app = express();

app.use(express.json());

// имитация эндпоинта для Pelinda
app.post("/validate", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
  res.status(200).json({
    status: "validated!!"
  });
});

app.listen(3000, () => console.log("✅ Pelinda mock server running on port 3000"));
