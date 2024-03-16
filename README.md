**Binance Chart Telegram Bot with Node.js and Telegraf**

This project provides a Node.js script to create a Telegram bot that retrieves and displays charts from Binance using their API.

**Features**

* Fetches chart data for crypto symbols on Binance.
* Responds to user commands (e.g., `/chart BTCUSDT`).
* (Optional) Generates chart image using chart.js (not included in this example).

**Requirements**

* Node.js and npm installed.
* Telegram bot account and bot token.
* Binance developer account and API credentials (API Key and Secret Key).

**Installation**

1. Clone or download this repository.
2. Install required dependencies:

   ```bash
   npm install telegraf axios
   # Optional: npm install chart.js
