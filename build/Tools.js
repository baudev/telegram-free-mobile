"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tools {
    /**
     * Removes accents in the passed parameter
     * @param str
     */
    static removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
}
exports.Tools = Tools;
