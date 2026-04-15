function createError(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

class Book {
  constructor({ title, author, quantity }) {
    this.title = title?.trim();
    this.author = author?.trim();
    this.quantity = quantity;
  }

  validate() {
    if (!this.title) {
      throw createError('Title is required.', 400);
    }

    if (!this.author) {
      throw createError('Author is required.', 400);
    }

    this.validateQuantity(this.quantity);
  }

  validateQuantity(quantity) {
    if (!Number.isInteger(quantity) || quantity < 0) {
      throw createError('Quantity must be a non-negative integer.', 400);
    }
  }

  updateQuantity(quantity) {
    this.validateQuantity(quantity);
    this.quantity = quantity;
  }

  toDatabase() {
    return {
      title: this.title,
      author: this.author,
      quantity: this.quantity,
    };
  }
}

export default Book;
