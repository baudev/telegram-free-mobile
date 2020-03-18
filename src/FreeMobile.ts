import {Configuration} from "./Configuration";
import {PublicImage} from "./PublicImage";
const freemobile = require('freemobile-sms');

export class FreeMobile {

    /**
     * Make the calls to the Free mobile API
     * @param content
     */
    private static sendSMSToEveryUsers(content: string){
        Configuration.freeMobileCredentials.forEach((credential) => {
            freemobile.send(content, credential);
        });
    }

    /**
     * Sends a SMS to all free mobile users
     * @param content
     */
    public static sendMessage(content: string){
        FreeMobile.sendSMSToEveryUsers(content);
    }

    /**
     * Sends a SMS to all free mobile users including a link to view the image
     * @param content
     * @param publicImage
     */
    public static sendMessageWithPicture(content: string, publicImage: PublicImage){
        FreeMobile.sendMessage(content + "\n" + publicImage.getPublicUrl())
    }

}