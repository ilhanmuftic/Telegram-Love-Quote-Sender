# Telegram Quote Bot

This bot sends random quotes to a specified Telegram user. It uses the `node-telegram-bot-api` library and reads quotes from a `quotes.json` file. To use the bot, follow these steps:

You will first need to create your Telegram Bot:
https://flowxo.com/how-to-create-a-bot-for-telegram-short-and-simple-guide-for-beginners/

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Update the `token` variable in `app.js` with your Telegram bot token.
4. Update the `you` and `target` variables in `index.js` with the chat IDs of the users you want to send quotes to. (Use /myid to get your id)
5. Update the `quotes.json` file with your own quotes. (Hint: use ChatGPT to generate love quotes, and make some personalized by includeing names and nicknames)
6. Run the bot using `node app.js`.
7. Use the `/send` command to send a random quote to the specified user.
8. Use the `/heart` command to send a heart to the specified user.

