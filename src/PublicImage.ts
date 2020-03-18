import {Configuration} from "./Configuration";

const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');

/**
 * Makes the file accessible from external HTTP server
 * @author Baudev
 */
export class PublicImage {

    publicFilePath: string;
    publicFileName: string;

    constructor(absoluteFilePath: string) {
        // creates files directory if it doesn't exist
        if (!fs.existsSync(Configuration.filesDirectory)){
            fs.mkdirSync(Configuration.filesDirectory);
        }

        // we copy the file to the public directory
        let data = fs.readFileSync(absoluteFilePath);
        this.publicFileName = uuidv4() + '.' + absoluteFilePath.split('.').pop();
        this.publicFilePath = path.resolve(Configuration.filesDirectory, this.publicFileName);
        fs.writeFileSync(this.publicFilePath, data);
    }

    /**
     * Returns the public URL of the file
     */
    getPublicUrl(){
        let prefix = Configuration.server.enable_https ? "https" : "http";
        return prefix + "://" + Configuration.server.http_domain + ':' + Configuration.server.files_server_port + '/' + this.publicFileName;
    }
}