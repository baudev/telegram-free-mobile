import {TelegramConfigurationInterface} from "./TelegramConfigurationInterface";
import {FreeMobileConfigurationInterface} from "./FreeMobileConfigurationInterface";
import {ServerConfigurationInterface} from "./ServerConfigurationInterface";

export interface ConfigurationInterface {
    telegram: TelegramConfigurationInterface,
    free_mobile: Array<FreeMobileConfigurationInterface>,
    files_directory: string,
    server: ServerConfigurationInterface
}