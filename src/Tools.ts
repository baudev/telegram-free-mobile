import {Configuration} from "./Configuration";
import ErrnoException = NodeJS.ErrnoException;
import {Stats} from "fs";
const fs = require('fs');
const path = require('path');

export class Tools {

    /**
     * Removes accents in the passed parameter
     * @param str
     */
    public static removeAccents(str: string): string{
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    /**
     * Removes images older than 30 days
     */
    public static clearUselessImages(){
        let uploadsDir = Configuration.filesDirectory;
        fs.readdir(uploadsDir, function(err: ErrnoException | null, files: string[]) {
            files.forEach(function(file, index) {
                fs.stat(path.join(uploadsDir, file), function(err: ErrnoException | null, stat: Stats) {
                    var endTime, now;
                    if (err) {
                        return console.error(err);
                    }
                    now = new Date().getTime();
                    endTime = new Date(stat.ctime).getTime() + 3600000 * 24 * 30; // 30 days
                    if (now > endTime) {
                        return fs.unlink(path.join(uploadsDir, file), function (err: ErrnoException | null) {

                        });
                    }
                });
            });
        });
    }

}