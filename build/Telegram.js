"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TelegramBot = require('node-telegram-bot-api');
class Telegram {
    constructor(configuration) {
        this.configuration = configuration;
        this._bot = this.initTelegramBot(false);
    }
    /**
     * Inits the Telegram communication.
     * @param serverMode
     */
    initTelegramBot(serverMode = false) {
        return new TelegramBot(this.configuration.telegramCredentials.bot_token, { polling: serverMode });
    }
    /**
     * Sends a message to Telegram group.
     * @param content
     */
    sendMessage(content) {
        return this.bot.sendMessage(this.configuration.telegramCredentials.group_id, content, {
            parse_mode: "Markdown",
        });
    }
    /**
     * Sends a message including a picture.
     * @param content
     * @param picture
     */
    sendMessageWithPicture(content, picture) {
        // @ts-ignore parse_mode is allowed
        return this.bot.sendPhoto(this.configuration.telegramCredentials.group_id, picture, { caption: content, parse_mode: "Markdown" });
    }
    /**
     * Launches a Telegram server to handle user interactions (such as commands for example).
     */
    launchTelegramServer() {
        this.bot = this.initTelegramBot(true);
        return this;
    }
    /**
     * Sets callback for on message event.
     * @param onMessageReceived
     */
    setOnMessageListener(onMessageReceived) {
        this.bot.on('message', function (message) {
            onMessageReceived(message); // transmits the message to the callback
        });
    }
    get bot() {
        return this._bot;
    }
    set bot(value) {
        this._bot = value;
    }
}
exports.Telegram = Telegram;
