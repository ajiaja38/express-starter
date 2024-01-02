const BadRequestException = require("./BadRequestException");

class ForbiddenException extends BadRequestException {
  constructor(message) {
    super(message, 403);
    this.name = "ForbiddenException";
  }
}

module.exports = ForbiddenException;
