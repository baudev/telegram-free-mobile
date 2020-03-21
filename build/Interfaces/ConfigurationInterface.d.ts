import { TelegramConfigurationInterface } from "./TelegramConfigurationInterface";
import { FreeMobileConfigurationInterface } from "./FreeMobileConfigurationInterface";
export interface ConfigurationInterface {
    telegram: TelegramConfigurationInterface;
    free_mobile: Array<FreeMobileConfigurationInterface>;
}
