import {TelegramConfigurationInterface} from "./Interfaces/TelegramConfigurationInterface";
import {FreeMobileConfigurationInterface} from "./Interfaces/FreeMobileConfigurationInterface";
import {ConfigurationInterface} from "./Interfaces/ConfigurationInterface";
const fs = require('fs');

export class Configuration {

    /**
     * Configuration concerning telegram API
     */
    private _telegramCredentials: TelegramConfigurationInterface;
    /**
     * Free mobile user credentials
     */
    private _freeMobileCredentials : Array<FreeMobileConfigurationInterface> = [];

    /**
     * Load the configuration attributes.
     * @param config Path to the json config file or object.
     */
    constructor(config : ConfigurationInterface | string) {
        let configuration;
        if(typeof config === 'string') {
            configuration = JSON.parse(fs.readFileSync(config));
        } else {
            configuration = config;
        }
        this._telegramCredentials = configuration.telegram;
        this._freeMobileCredentials = configuration.free_mobile;
    }


    get telegramCredentials(): TelegramConfigurationInterface {
        return this._telegramCredentials;
    }

    set telegramCredentials(value: TelegramConfigurationInterface) {
        this._telegramCredentials = value;
    }

    get freeMobileCredentials(): Array<FreeMobileConfigurationInterface> {
        return this._freeMobileCredentials;
    }

    set freeMobileCredentials(value: Array<FreeMobileConfigurationInterface>) {
        this._freeMobileCredentials = value;
    }
}