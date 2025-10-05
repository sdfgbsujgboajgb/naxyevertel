export default function handler(request, response) {
  // Устанавливаем правильные заголовки для Roblox
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Access-Control-Allow-Origin', '*');
  
  response.status(200).json({
    "V2_Authentication": "success"
  });
}
