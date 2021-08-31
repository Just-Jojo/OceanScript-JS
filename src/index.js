'use strict';
/**A very basic emplimentation of Kreusada's OceanScript in JavaScript
 * I mostly wrote this just to sharpen my JavaScript skills but also so that OceanScript could come to JavaScript
*/
const { encode, decode } = require("./oceanscript/ocs.js");

module.exports = {
    encode: encode,
    decode: decode,
    UnsupportedCharacterError: require("./oceanscript/errors"),
    ParserError: require("./oceanscript/errors")
};