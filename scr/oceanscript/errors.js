'use strict';

function UnsupportedCharacterError(char) {
    const error = new Error(`Character '${char}' is not supported`);
    error.code = "UNSUPPORTED_CHAR";
    return error;
}

UnsupportedCharacterError.prototype = Object.create(Error.prototype);

function ParserError() {
    const error = new Error("Failed to parse"); // TODO Make this better :duckblank:
    error.code = "PARSER_ERROR";
}

ParserError.prototype = Object.create(Error.prototype);

module.exports = {
    "UnsupportedCharacterError": UnsupportedCharacterError,
    "ParserError": ParserError
};