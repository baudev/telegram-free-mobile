"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Configuration_1 = require("./Configuration");
const path_1 = __importDefault(require("path"));
const Telegram_1 = require("./Telegram");
const FreeMobile_1 = require("./FreeMobile");
const Tools_1 = require("./Tools");
exports.Tools = Tools_1.Tools;
class TelegramFreeMobile {
    /**
     * Load the configuration attributes.
     * @param config Path to the json config file or object.
     */
    constructor(config = path_1.default.join(__dirname, '/../config.json')) {
        this._configuration = new Configuration_1.Configuration(config);
        this._telegram = new Telegram_1.Telegram(this.configuration);
        this._freeMobile = new FreeMobile_1.FreeMobile(this.configuration);
    }
    get telegram() {
        return this._telegram;
    }
    get freeMobile() {
        return this._freeMobile;
    }
    get configuration() {
        return this._configuration;
    }
}
exports.TelegramFreeMobile = TelegramFreeMobile;
