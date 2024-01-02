const BadRequestException = require("../error/BadRequestException");

const catchEverythings = (err, req, res, next) => {
  const statusCode = err instanceof BadRequestException ? err.statusCode : 500;

  res
    .status(statusCode)
    .json(statusCode === 500 ? "Terjadi kesalahan pada server!" : err.message);

  next();
};

module.exports = catchEverythings;
