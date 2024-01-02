const ClientError = require("./BadRequestException");

class NotFoundException extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = "NotFoundException";
  }
}

module.exports = NotFoundException;
