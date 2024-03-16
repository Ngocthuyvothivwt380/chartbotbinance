const Telegraf = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');

bot.command('/chart', async (ctx) => {
  const symbol = ctx.message.text.split(' ')[1];
  if (!symbol) {
    return ctx.reply('Please specify a symbol (e.g., /chart BTCUSDT)');
  }

  const chartData = await fetchChartData(symbol);
  const chartMessage = prepareChartMessage(chartData);
  ctx.reply(chartMessage);
});

async function fetchChartData(symbol) {
  const apiUrl = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1m`; // Replace '1m' for your timeframe
  const response = await axios.get(apiUrl);
  const data = response.data.map(item => ({ timestamp: item[0], price: item[4] })); // Assuming timestamps and closing prices at specific indexes
  return data;
}

function prepareChartMessage(chartData) {
  // Implement your logic here to process or format chart data (text or potentially chart image using chart.js)
  // ...
  const message = 'Your chart data is ready!'; // Replace with formatted data
  return message;
}

bot.launch();
