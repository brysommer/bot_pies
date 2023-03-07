// const token = '6131943112:AAHRDUKps3835UTdKLJbxyS_GXbm6n_iW-8';
// CHAT_ID = "-820099171";
const TelegramBot = require('node-telegram-bot-api');

const token = '6131943112:AAHRDUKps3835UTdKLJbxyS_GXbm6n_iW-8';
const bot = new TelegramBot(token, { polling: true });

const groupChatId = '-820099171';

// Send a greeting message
bot.sendMessage(groupChatId, 'Hello, I am your friendly bot!');

// Set up the scheduled messages
const scheduledMessages = [
  { hour: 10, minute: 0, message: 'Good morning! ☀️' },
  { hour: 12, minute: 0, message: 'Lunch time! 🍴' },
  { hour: 14, minute: 0, message: 'Afternoon break! ☕️' },
  { hour: 19, minute: 0, message: 'Dinner time! 🍽️' },
  { hour: 20, minute: 10, message: 'Time for some snacks! first 🍿' },
  { hour: 20, minute: 15, message: 'Time for some snacks! second 🍿' },
  { hour: 20, minute: 20, message: 'Time for some snacks! last 🍿' },
];

function sendMessage(message) {
  bot.sendMessage(groupChatId, message);
}

function scheduleMessages() {
  const now = new Date();
  for (let i = 0; i < scheduledMessages.length; i++) {
    const { hour, minute, message } = scheduledMessages[i];
    if (now.getHours() === hour && now.getMinutes() === minute) {
      sendMessage(message);
    }
  }
}

setInterval(scheduleMessages, 60000);







