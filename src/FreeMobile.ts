import {Configuration} from "./Configuration";
const freemobile = require('freemobile-sms');

export class FreeMobile {

    private configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    /**
     * Sends a SMS to all free mobile users
     * @param content
     */
    public sendMessage(content: string): Promise<void[]> {
        let promises: Array<Promise<void>> = [];
        this.configuration.freeMobileCredentials.forEach((credential) => {
            promises.push(freemobile.send(content, credential));
        });
        return Promise.all(promises);
    }
}