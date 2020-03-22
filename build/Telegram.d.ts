import { Configuration } from "./Configuration";
import TelegramBotDefinition from "node-telegram-bot-api";
export declare class Telegram {
    private configuration;
    private _bot;
    constructor(configuration: Configuration);
    /**
     * Inits the Telegram communication.
     * @param serverMode
     */
    private initTelegramBot;
    /**
     * Sends a message to Telegram group.
     * @param content
     */
    sendMessage(content: string): Promise<TelegramBotDefinition.Message>;
    /**
     * Sends a message including a picture.
     * @param content
     * @param picture
     */
    sendMessageWithPicture(content: string, picture: string): Promise<TelegramBotDefinition.Message>;
    /**
     * Sends a message including a video.
     * @param content
     * @param video
     */
    sendMessageWithVideo(content: string, video: string): Promise<TelegramBotDefinition.Message>;
    /**
     * Launches a Telegram server to handle user interactions (such as commands for example).
     */
    launchTelegramServer(): Telegram;
    /**
     * Sets callback for on message event.
     * @param onMessageReceived
     */
    setOnMessageListener(onMessageReceived: (message: TelegramBotDefinition.Message) => void): void;
    get bot(): TelegramBotDefinition;
    set bot(value: TelegramBotDefinition);
}
