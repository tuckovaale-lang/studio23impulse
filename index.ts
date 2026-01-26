import express, { Request, Response } from "express";
// @ts-ignore
import cors from "cors";
import fetch from "node-fetch";

const app = express();

// Middleware
app.use(express.json());

// Разрешаем CORS с любого источника
app.use(cors());

// Telegram настройки
const TELEGRAM_TOKEN = "8276880791:AAFojkV6So4f4Tt_Xt0MiAcaGBrSeK8xmdg";
const ADMIN_CHAT_ID = 1309682139;

// Тип заявки
interface BookingData {
  name: string;
  phone: string;
  classInterest?: string;
}

// Эндпоинт для бронирования
app.post("/api/booking", async (req: Request, res: Response) => {
  console.log("Получена заявка:", req.body);

  const { name, phone, classInterest } = req.body as BookingData;

  if (!name || !phone) {
    return res.status(400).json({ ok: false, error: "Имя и телефон обязательны" });
  }

  const message = `
📩 *Новая заявка с сайта*
👤 Имя: ${name}
📞 Телефон: ${phone}
💃 Направление: ${classInterest || "Не выбрано"}
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: ADMIN_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await response.json();
    console.log("Ответ Telegram:", data);

    if (!data.ok) throw new Error("Ошибка отправки сообщения в Telegram");

    res.json({ ok: true });
  } catch (error: any) {
    console.error("Telegram error:", error);
    res.status(500).json({ ok: false, error: error.message || "Ошибка сервера" });
  }
});

// Порт от Replit или 5000
const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));