const BadRequestException = require("./BadRequestException");

class UnauthorizedException extends BadRequestException {
  constructor(message) {
    super(message, 401);
    this.name = "UnauthorizedException";
  }
}

module.exports = UnauthorizedException;
