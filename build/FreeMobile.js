"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const freemobile = require('freemobile-sms');
class FreeMobile {
    constructor(configuration) {
        this.configuration = configuration;
    }
    /**
     * Sends a SMS to all free mobile users
     * @param content
     */
    sendMessage(content) {
        let promises = [];
        this.configuration.freeMobileCredentials.forEach((credential) => {
            promises.push(freemobile.send(content, credential));
        });
        return Promise.all(promises);
    }
}
exports.FreeMobile = FreeMobile;
