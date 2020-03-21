import {Configuration} from "./Configuration";
import {ConfigurationInterface} from "./Interfaces/ConfigurationInterface";
import path from "path";
import {Telegram} from "./Telegram";
import {FreeMobile} from "./FreeMobile";
import {Tools} from "./Tools";

class TelegramFreeMobile {

    private readonly _configuration: Configuration;
    private _telegram: Telegram;
    private _freeMobile: FreeMobile;

    /**
     * Load the configuration attributes.
     * @param config Path to the json config file or object.
     */
    constructor(config: ConfigurationInterface | string = path.join(__dirname, '/../config.json')) {
        this._configuration = new Configuration(config);
        this._telegram = new Telegram(this.configuration);
        this._freeMobile = new FreeMobile(this.configuration);
    }

    get telegram(): Telegram {
        return this._telegram;
    }

    get freeMobile(): FreeMobile {
        return this._freeMobile;
    }

    get configuration(): Configuration {
        return this._configuration;
    }
}

export {
    TelegramFreeMobile,
    Tools
}