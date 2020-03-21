"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
class Configuration {
    /**
     * Load the configuration attributes.
     * @param config Path to the json config file or object.
     */
    constructor(config) {
        /**
         * Free mobile user credentials
         */
        this._freeMobileCredentials = [];
        let configuration;
        if (typeof config === 'string') {
            configuration = JSON.parse(fs.readFileSync(config));
        }
        else {
            configuration = config;
        }
        this._telegramCredentials = configuration.telegram;
        this._freeMobileCredentials = configuration.free_mobile;
    }
    get telegramCredentials() {
        return this._telegramCredentials;
    }
    set telegramCredentials(value) {
        this._telegramCredentials = value;
    }
    get freeMobileCredentials() {
        return this._freeMobileCredentials;
    }
    set freeMobileCredentials(value) {
        this._freeMobileCredentials = value;
    }
}
exports.Configuration = Configuration;
