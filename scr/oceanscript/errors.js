'use strict';

/**
 * This gets thrown when a Character is illegal
 * @param {String} char 
 * @returns Error
 */
function UnsupportedCharacterError(char) {
    const error = new Error(`Character '${char}' is not supported`);
    error.code = "UNSUPPORTED_CHAR";
    return error;
}

UnsupportedCharacterError.prototype = Object.create(Error.prototype);

/**
 * Raises when the parser has ran into an error
 * @returns Error
 */
function ParserError() {
    const error = new Error("Failed to parse"); // TODO Make this better :duckblank:
    error.code = "PARSER_ERROR";
    return error;
}

ParserError.prototype = Object.create(Error.prototype);

module.exports = {
    "UnsupportedCharacterError": UnsupportedCharacterError,
    "ParserError": ParserError
};