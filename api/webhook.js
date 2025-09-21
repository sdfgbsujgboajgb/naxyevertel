// api/webhook.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // проверка секрета
  const auth = req.headers["x-auth-key"];
  if (auth !== process.env.SECRET_KEY) {
    return res.status(403).json({ error: "Forbidden" });
  }

  const body = req.body;

  try {
    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Webhook error", details: err.message });
  }
}
