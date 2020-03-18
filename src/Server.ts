import {Configuration} from "./Configuration";
import {Telegram} from "./Telegram";
const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
import TelegramBot from "node-telegram-bot-api";

export class Server {

    constructor(callback: (bot: any, message: TelegramBot.Message) => void) {
        let telegram = new Telegram(callback);
        telegram.launchTelegramServer();
        this.fileHttpServer();
    }

    /**
     * Launch the public server to make files accessible
     */
    private fileHttpServer() {
        const app = express();
        app.use('/', express.static(Configuration.filesDirectory));

        if(!Configuration.server.enable_https) {
            let httpServer = http.createServer(app);
            httpServer.listen(Configuration.server.files_server_port);
        } else {
            const privateKey  = fs.readFileSync(Configuration.server.ssl.privateKey, 'utf8');
            const certificate = fs.readFileSync(Configuration.server.ssl.certificate, 'utf8');
            let credentials = {key: privateKey, cert: certificate};
            let httpsServer = https.createServer(credentials, app);
            httpsServer.listen(Configuration.server.files_server_port);
        }
    }

}