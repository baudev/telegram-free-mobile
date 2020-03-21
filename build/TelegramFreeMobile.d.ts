import { Configuration } from "./Configuration";
import { ConfigurationInterface } from "./Interfaces/ConfigurationInterface";
import { Telegram } from "./Telegram";
import { FreeMobile } from "./FreeMobile";
import { Tools } from "./Tools";
declare class TelegramFreeMobile {
    private readonly _configuration;
    private _telegram;
    private _freeMobile;
    /**
     * Load the configuration attributes.
     * @param config Path to the json config file or object.
     */
    constructor(config?: ConfigurationInterface | string);
    get telegram(): Telegram;
    get freeMobile(): FreeMobile;
    get configuration(): Configuration;
}
export { TelegramFreeMobile, Tools };
