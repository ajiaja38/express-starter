const BadRequestException = require("../../error/BadRequestException");
const UserPayloadSchema = require("./schema");

const UserValidator = {
  validateCreateUser: (payload) => {
    const validationResult = UserPayloadSchema(payload);

    if (validationResult.error) {
      throw new BadRequestException(validationResult.error.message);
    }
  },
};

module.exports = UserValidator;
