import {PublicImage} from "./PublicImage";
import {Telegram} from "./Telegram";
import {FreeMobile} from "./FreeMobile";
import {Tools} from "./Tools";

export class Communication {

    /**
     * Sends message via Telegram and Free mobile
     * @param title
     * @param content
     */
    public static sendMessage(title: string, content: string){
        Telegram.sendMessage(title.toUpperCase(), content);
        FreeMobile.sendMessage(title.toUpperCase() + "\n" + content);
    }

    /**
     * Sends message with a picture via Telegram and Free mobile
     * @param title
     * @param content
     * @param absoluteFilePath
     */
    public static sendMessageWithPicture(title: string, content: string, absoluteFilePath: string){
        // we copy the file into the public directory
        let publicFile = new PublicImage(absoluteFilePath);
        Telegram.sendMessageWithPicture(title.toUpperCase(), content, publicFile);
        FreeMobile.sendMessageWithPicture(title.toUpperCase() + "\n" + content, publicFile)

        // we delete images older than 30 days
        Tools.clearUselessImages();
    }

}