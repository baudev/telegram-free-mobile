import { Configuration } from "./Configuration";
export declare class FreeMobile {
    private configuration;
    constructor(configuration: Configuration);
    /**
     * Sends a SMS to all free mobile users
     * @param content
     */
    sendMessage(content: string): Promise<void[]>;
}
