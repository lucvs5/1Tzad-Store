// backend/src/server.ts - PORTUGUÊS BRASIL
import express from 'express';
import { Telegraf } from 'telegraf';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

app.use(cors());
app.use(express.json());

// ROTA DE CHECKOUT: Recebe os dados do site
app.post('/api/checkout', async (req, res) => {
    const { user, cart, address, totals } = req.body;
    const orderId = `TZD-${Math.floor(1000 + Math.random() * 9000)}`;

    // Formatação da mensagem para o Canal do Telegram
    const message = `
📦 <b>NOVO PEDIDO #${orderId}</b>
👤 <b>Cliente:</b> ${user.name}
📧 <b>Email:</b> ${user.email}
📞 <b>Telefone:</b> ${user.phone}
📍 <b>Endereço:</b> ${address}

🛒 <b>ITENS:</b>
${cart.map((i: any) => `• ${i.name} (x${i.qty}) - R$ ${i.price}`).join('\n')}

💰 <b>VALOR:</b> R$ ${totals.subtotal}
🏷️ <b>DESCONTO:</b> ${totals.discount}%
🔥 <b>TOTAL:</b> R$ ${totals.total.toFixed(2)}
    `;

    try {
        // Envia para o Canal
        const sent = await bot.telegram.sendMessage(process.env.TELEGRAM_CHANNEL_ID!, message, { parse_mode: 'HTML' });
        res.status(200).json({ success: true, orderId, msgId: sent.message_id });
    } catch (err) {
        console.error("Erro Telegram:", err);
        res.status(500).json({ error: "Erro ao processar pedido" });
    }
});

// ESCUTAR RESPOSTAS DO CANAL (O ADM comenta no post e o usuário recebe no site)
bot.on('message', (ctx: any) => {
    if (ctx.message.reply_to_message) {
        const respostaAdm = ctx.message.text;
        const msgOriginalId = ctx.message.reply_to_message.message_id;
        
        // Log para controle no terminal
        console.log(`[LOG] Resposta para pedido ${msgOriginalId}: ${respostaAdm}`);
        
        // Aqui futuramente enviaremos via WebSocket para o "Painel de Mensagens" do site
    }
});

bot.launch();
app.listen(process.env.PORT || 3000, () => console.log('🚀 Backend Tzad Store Ativo!'));
