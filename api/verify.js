import express from "express";
const app = express();

app.use(express.json());

// Эндпоинт для Pelinda / Panda V3
app.all("/v3_validate", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();

  // Можно логировать тело запроса для отладки
  // console.log("Pelinda request body:", req.body);

  // Всегда возвращаем успех
  res.status(200).json({
    status: "validated!!"
  });
});

app.listen(3000, () => console.log("✅ Pelinda mock server running on port 3000"));
