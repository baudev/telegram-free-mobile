import {TelegramConfigurationInterface} from "./Interfaces/TelegramConfigurationInterface";
import {FreeMobileConfigurationInterface} from "./Interfaces/FreeMobileConfigurationInterface";
import {ConfigurationInterface} from "./Interfaces/ConfigurationInterface";
import {ServerConfigurationInterface} from "./Interfaces/ServerConfigurationInterface";

const path = require('path');
const fs = require('fs');

export class Configuration {

    /**
     * Configuration concerning telegram API
     */
    public static telegramCredentials: TelegramConfigurationInterface;
    /**
     * Free mobile user credentials
     */
    public static freeMobileCredentials : Array<FreeMobileConfigurationInterface> = [];
    /**
     * Files where the sent images will be stored
     */
    public static filesDirectory: string = __dirname + '/../files';
    /**
     * Server configuration
     */
    public static server: ServerConfigurationInterface = {
        http_domain: "localhost",
        files_server_port: 8525,
        enable_https: false,
        ssl: {
            privateKey: "",
            certificate: ""
        }
    };

    public static load(configurationFilePath: string = path.join(__dirname, '/../config.json')) {
        let configuration: ConfigurationInterface = JSON.parse(fs.readFileSync(configurationFilePath));
        Configuration.telegramCredentials = configuration.telegram;
        Configuration.freeMobileCredentials = configuration.free_mobile;
        Configuration.filesDirectory = configuration.files_directory;
        Configuration.server = configuration.server
    }

}