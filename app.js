const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');


// replace the value below with the Telegram token you receive from @BotFather
const token = '<YOUR-TELEGRAM-BOT-API-TOKEN>';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Replace with your and your target's id
const you = 5997165264 // Your Telegram Chat ID 
const target = 5997165264 // Your Partner's Telegram Chat ID

const help = `I send you quotes!`

let quotes = JSON.parse(fs.readFileSync('quotes.json'));

bot.onText(/\/status/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "True");
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, help);
});

bot.onText(/\/send/, (msg) => {
  sendQuote()
});

bot.onText(/\/heart/, (msg) => {
  bot.sendMessage(target, "<3");
});

bot.onText(/\/myid/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, chatId);
  console.log(chatId)
});



  //sendQuote()



function sendQuote() {
  // Check if there are any quotes left
  if (quotes.length === 0) {
    bot.sendMessage(you, 'No quotes left!');
    return;
  }

  // Get a random quote index
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];

  // Remove the sent quote from the array
  quotes.splice(quoteIndex, 1);
  
  // Send the quote to the specified chat ID
  bot.sendMessage(target, quote).then(() => {
    // Save the updated quotes array to the quotes.json file
    fs.writeFileSync('quotes.json', JSON.stringify(quotes));
	
    bot.sendMessage(you, "Quote sent to Target!")
	
  }).catch((err) => {
	bot.sendMessage(you, err)
    console.error(err);
  });

}