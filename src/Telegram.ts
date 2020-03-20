import {Configuration} from "./Configuration";
const TelegramBot = require('node-telegram-bot-api');
import TelegramBotDefinition from "node-telegram-bot-api";

export class Telegram {

    private configuration: Configuration;
    private _bot: TelegramBotDefinition;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
        this._bot = this.initTelegramBot(false);
    }

    /**
     * Inits the Telegram communication.
     * @param serverMode
     */
    private initTelegramBot(serverMode: boolean = false){
        return new TelegramBot(this.configuration.telegramCredentials.bot_token, {polling: serverMode});
    }

    /**
     * Sends a message to Telegram group.
     * @param content
     */
    public sendMessage(content: string): Promise<TelegramBotDefinition.Message>{
        return this.bot.sendMessage(this.configuration.telegramCredentials.group_id, content, {
            parse_mode: "Markdown",
        });
    }

    /**
     * Sends a message including a picture.
     * @param content
     * @param picture
     */
    public sendMessageWithPicture(content: string, picture: string): Promise<TelegramBotDefinition.Message>{
        return this.bot.sendPhoto(this.configuration.telegramCredentials.group_id, picture, {caption: content});
    }

    /**
     * Launches a Telegram server to handle user interactions (such as commands for example).
     */
    public launchTelegramServer(): Telegram {
        this.bot = this.initTelegramBot(true);
        return this;
    }

    /**
     * Sets callback for on message event.
     * @param onMessageReceived
     */
    public setOnMessageListener(onMessageReceived: (message: TelegramBotDefinition.Message) => void) {
        this.bot.on('message', function (message: TelegramBotDefinition.Message) {
            onMessageReceived(message); // transmits the message to the callback
        });
    }

    get bot(): TelegramBotDefinition {
        return this._bot;
    }

    set bot(value: TelegramBotDefinition) {
        this._bot = value;
    }
}