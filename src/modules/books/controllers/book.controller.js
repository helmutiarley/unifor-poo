import {
  createBook,
  findBooksByAuthor,
  findBooksByTitle,
  listBooks,
  removeBooksByTitle,
  updateBookQuantity,
} from '../services/book.service.js';

function createError(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

export async function create(req, res, next) {
  try {
    const quantity = Number.parseInt(req.body.quantity, 10);
    const book = await createBook({
      title: req.body.title,
      author: req.body.author,
      quantity,
    });

    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
}

export async function list(req, res, next) {
  try {
    const books = await listBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
}

export async function findByTitle(req, res, next) {
  try {
    const books = await findBooksByTitle(req.params.title);
    res.json(books);
  } catch (error) {
    next(error);
  }
}

export async function findByAuthor(req, res, next) {
  try {
    const books = await findBooksByAuthor(req.params.author);
    res.json(books);
  } catch (error) {
    next(error);
  }
}

export async function updateQuantity(req, res, next) {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const quantity = Number.parseInt(req.body.quantity, 10);

    if (!Number.isInteger(id) || id <= 0) {
      throw createError('A valid book id is required.', 400);
    }

    const book = await updateBookQuantity(id, quantity);
    res.json(book);
  } catch (error) {
    next(error);
  }
}

export async function removeByTitle(req, res, next) {
  try {
    const result = await removeBooksByTitle(req.params.title);
    res.json(result);
  } catch (error) {
    next(error);
  }
}
