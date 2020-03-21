import { TelegramConfigurationInterface } from "./Interfaces/TelegramConfigurationInterface";
import { FreeMobileConfigurationInterface } from "./Interfaces/FreeMobileConfigurationInterface";
import { ConfigurationInterface } from "./Interfaces/ConfigurationInterface";
export declare class Configuration {
    /**
     * Configuration concerning telegram API
     */
    private _telegramCredentials;
    /**
     * Free mobile user credentials
     */
    private _freeMobileCredentials;
    /**
     * Load the configuration attributes.
     * @param config Path to the json config file or object.
     */
    constructor(config: ConfigurationInterface | string);
    get telegramCredentials(): TelegramConfigurationInterface;
    set telegramCredentials(value: TelegramConfigurationInterface);
    get freeMobileCredentials(): Array<FreeMobileConfigurationInterface>;
    set freeMobileCredentials(value: Array<FreeMobileConfigurationInterface>);
}
