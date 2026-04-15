function errorHandler(error, req, res, next) {
  if (error.code === 'P2002') {
    return res.status(409).json({
      message: 'A book with this title already exists.',
    });
  }

  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json({
    message: error.message || 'Internal server error.',
  });
}

export default errorHandler;
