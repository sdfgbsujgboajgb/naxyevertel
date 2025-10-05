export default function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();

  // Можно логировать тело запроса
  // console.log('Pelinda request body:', req.body);

  // Возвращаем JSON как если бы ключ валидный
  res.status(200).json({
    status: "validated!!",           // именно этот ключ проверяет Pelinda.Init
    service: req.body?.Service || "UnknownService",
    key: req.body?.Key || "dummy-key",
    securityLevel: req.body?.SecurityLevel || 1,
    message: "PandaV3 Loaded Successfully!"
  });
}
