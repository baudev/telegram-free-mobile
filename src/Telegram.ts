import {Configuration} from "./Configuration";
import {PublicImage} from "./PublicImage";
const TelegramBot = require('node-telegram-bot-api');
import TelegramBotDefinition from "node-telegram-bot-api";

export class Telegram {

    private callback: (bot: any, message: TelegramBotDefinition.Message) => void;

    constructor(callback: (bot: any, message: TelegramBotDefinition.Message) => void) {
        this.callback = callback;
    }

    /**
     * Inits the Telegram communication.
     * @param serverMode
     */
    private static initTelegramBot(serverMode: boolean = false){
        return new TelegramBot(Configuration.telegramCredentials.bot_token, {polling: serverMode});
    }

    /**
     * Sends a message to Telegram group.
     * @param title
     * @param content
     */
    public static sendMessage(title: string, content: string){
        let bot = Telegram.initTelegramBot(false);
        bot.sendMessage(Configuration.telegramCredentials.group_id, "*" + title + "*\n" + content, {
            parse_mode: "markdown",
        });
    }

    /**
     * Sends a message including a picture.
     * @param title
     * @param content
     * @param publicImage
     */
    public static sendMessageWithPicture(title: string, content: string, publicImage: PublicImage){
        let bot = Telegram.initTelegramBot(false);
        Telegram.sendMessage(title, content);
        bot.sendPhoto(Configuration.telegramCredentials.group_id, publicImage.publicFilePath, {caption: title.toUpperCase() + "\n" + content});
    }

    /**
     * Launches a Telegram server to handle user interactions (such as commands for example).
     */
    public launchTelegramServer(){
        let bot = Telegram.initTelegramBot(true);
        let _this = this;
        bot.on('message', function (message: TelegramBotDefinition.Message) {
            _this.callback(bot, message); // transmits the message to the callback
        });

    }

}