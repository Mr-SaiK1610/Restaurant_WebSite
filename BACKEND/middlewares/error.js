class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorHandler;

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  console.log("ERROR MIDDLEWARE:", err);

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
