export default function handler(req, res) {
  // Разрешаем CORS для Roblox
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Всегда возвращаем success
  res.status(200).json({
    V2_Authentication: "success"
  });
}
