'use strict';

const { UnsupportedCharacterError, ParserError } = require("./errors.js");

function _create_characters() {
    var ret = '';
    for (var i = 32; i<=127; i++) {
        ret += String.fromCharCode(i);
    }
    for (var i = 0; i<10; i++) {
        ret += i.toString();
    }
    return ret;
}
const _ascii_chars = _create_characters();

const _mapping = {
    encoding_map: {
        " ": "\n",
        "a": "^<.",
        "b": "^-.",
        "c": "^>.",
        "d": "~<.",
        "e": "~-.",
        "f": "~>.",
        "g": "_<.",
        "h": "_-.",
        "i": "_>.",
        "j": "^<..",
        "k": "^-..",
        "l": "^>..",
        "m": "~<..",
        "n": "~-..",
        "o": "~>..",
        "p": "_<..",
        "q": "_-..",
        "r": "_>..",
        "s": "^<...",
        "t": "^-...",
        "u": "^>...",
        "v": "~<...",
        "w": "~-...",
        "x": "~>...",
        "y": "_<...",
        "z": "_-...",
        "0": "_>...",
        "1": "^<....",
        "2": "^-....",
        "3": "^>....",
        "4": "~<....",
        "5": "~-....",
        "6": "~>....",
        "7": "_<....",
        "8": "_-....",
        "9": "_>....",
    },
    decoding_map: {
        "\\n": " ",
        "^<.": "a",
        "^-.": "b",
        "^>.": "c",
        "~<.": "d",
        "~-.": "e",
        "~>.": "f",
        "_<.": "g",
        "_-.": "h",
        "_>.": "i",
        "^<..": "j",
        "^-..": "k",
        "^>..": "l",
        "~<..": "m",
        "~-..": "n",
        "~>..": "o",
        "_<..": "p",
        "_-..": "q",
        "_>..": "r",
        "^<...": "s",
        "^-...": "t",
        "^>...": "u",
        "~<...": "v",
        "~-...": "w",
        "~>...": "x",
        "_<...": "y",
        "_-...": "z",
        "_>...": "0",
        "^<....": "1",
        "^-....": "2",
        "^>....": "3",
        "~<....": "4",
        "~-....": "5",
        "~>....": "6",
        "_<....": "7",
        "_-....": "8",
        "_>....": "9",
    },
}


/**
 * Encodes a string with OceanScript
 * @param {String} content The content to be encoded
 */
function encode(content) {
    content = content.toLowerCase();
    var ret = "";
    for (var i = 0; i < content.length; i++) {
        var char = content[i];
        if (!_ascii_chars.includes(char)) {
            throw new UnsupportedCharacterError(char);
        }
        ret += _mapping.encoding_map[char];
    }
    return ret;
}

/**
 * Decode an OceanScript string
 * @param {String} content 
 */
function decode(content) {
    content = content.trim();
    content = content.replace("\n", "\\n");

    var formation = "";
    var reg = /(\\n)|([\^~_])([>\-<])(\.{1,4})/gm;
    [...content.split(reg)].forEach(elm => {
        if (!elm) formation += " ";
        else formation += elm;
    })
    var ret = "";
    formation.split(" ").forEach(elm => {
        try {
            if (elm) {
                ret += _mapping.decoding_map[elm];
            }
        } catch (error) {
            throw new ParserError();
        }
    })
    return ret;
}

module.exports.encode = encode;
module.exports.decode = decode;