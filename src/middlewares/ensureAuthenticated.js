const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppErrors.js");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("jwt token não informado", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);
    request.user = {
      id: Number(user_id),
    };

    return next();
  } catch (error) {
    throw new AppError("jwt token inválido", 401);
  }
}

module.exports = ensureAuthenticated;
