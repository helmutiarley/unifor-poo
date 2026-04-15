import express from 'express';

import bookRoutes from './modules/books/routes/book.routes.js';
import errorHandler from './modules/books/middlewares/error-handler.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Library API is running.',
  });
});

app.use('/books', bookRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found.',
  });
});

app.use(errorHandler);

export default app;
