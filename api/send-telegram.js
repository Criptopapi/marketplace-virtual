export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return res.status(400).json({ success: false, message: "Telegram no configurado" });
    }

    try {
      const encodedText = encodeURIComponent(text);
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodedText}`);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error Telegram:", error);
      return res.status(500).json({ success: false });
    }
  }
  return res.status(405).json({ error: 'Method not allowed' });
}