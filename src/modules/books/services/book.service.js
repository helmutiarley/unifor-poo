import Book from '../entities/book.entity.js';
import {
  createBook as createBookRecord,
  deleteBooksByIds,
  findAllBooks,
  findBookById,
  findBooksByAuthor as findBooksByAuthorRecord,
  findBooksByExactTitle,
  findBooksByTitle as findBooksByTitleRecord,
  updateBookQuantityById,
} from '../repositories/book.repository.js';

function createError(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

function validateTextField(value, fieldName) {
  const normalizedValue = value?.trim();

  if (!normalizedValue) {
    throw createError(`${fieldName} is required.`, 400);
  }

  return normalizedValue;
}

export async function createBook(data) {
  const book = new Book(data);
  book.validate();

  const existingBooks = await findBooksByExactTitle(book.title);

  if (existingBooks.length > 0) {
    throw createError('A book with this title already exists.', 409);
  }

  return createBookRecord(book.toDatabase());
}

export function listBooks() {
  return findAllBooks();
}

export function findBooksByTitle(title) {
  const normalizedTitle = validateTextField(title, 'Title');
  return findBooksByTitleRecord(normalizedTitle);
}

export function findBooksByAuthor(author) {
  const normalizedAuthor = validateTextField(author, 'Author');
  return findBooksByAuthorRecord(normalizedAuthor);
}

export async function updateBookQuantity(id, quantity) {
  const existingBook = await findBookById(id);

  if (!existingBook) {
    throw createError('Book not found.', 404);
  }

  const book = new Book(existingBook);
  book.updateQuantity(quantity);

  return updateBookQuantityById(id, book.quantity);
}

export async function removeBooksByTitle(title) {
  const normalizedTitle = validateTextField(title, 'Title');
  const books = await findBooksByExactTitle(normalizedTitle);

  if (books.length === 0) {
    throw createError('Book not found.', 404);
  }

  const result = await deleteBooksByIds(books.map((book) => book.id));

  return {
    deletedCount: result.count,
  };
}
