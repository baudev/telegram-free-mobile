export class Tools {

    /**
     * Removes accents in the passed parameter
     * @param str
     */
    public static removeAccents(str: string): string{
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

}