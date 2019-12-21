const messages    = require('./messages/messages.js');
const validations = require('./validations/validations.js');
const parsers     = require('./parsers/parsers.js');

module.exports = {
  enterHeaderMessage  : messages.enterHeaderMessage,
  invalidMessage      : messages.invalidMessage,
  commandDictMessage  : messages.commandDictMessage,
  boardSetMessage     : messages.boardSetMessage,

  isValidMatrix       : validations.isValidMatrix,
  isValidCommand      : validations.isValidCommand,

  extractArray        : parsers.extractArray,
}
