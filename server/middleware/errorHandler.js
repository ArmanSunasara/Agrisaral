// Centralized error handler with consistent JSON shape
module.exports = function errorHandler(err, req, res, next) {
  const status = err.statusCode || err.status || 500;
  const isProd = process.env.NODE_ENV === "production";

  const payload = {
    success: false,
    error: {
      message: err.message || "Internal Server Error",
      code: err.code || undefined,
    },
  };

  if (!isProd) {
    payload.error.stack = err.stack;
  }

  res.status(status).json(payload);
};