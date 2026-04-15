import prisma from '../../../lib/prisma.js';

export function createBook(data) {
  return prisma.book.create({
    data,
  });
}

export function findAllBooks() {
  return prisma.book.findMany({
    orderBy: {
      title: 'asc',
    },
  });
}

export function findBooksByTitle(title) {
  return prisma.book.findMany({
    where: {
      title: {
        contains: title,
        mode: 'insensitive',
      },
    },
    orderBy: {
      title: 'asc',
    },
  });
}

export function findBooksByAuthor(author) {
  return prisma.book.findMany({
    where: {
      author: {
        contains: author,
        mode: 'insensitive',
      },
    },
    orderBy: {
      title: 'asc',
    },
  });
}

export function findBookById(id) {
  return prisma.book.findUnique({
    where: { id },
  });
}

export function updateBookQuantityById(id, quantity) {
  return prisma.book.update({
    where: { id },
    data: { quantity },
  });
}

export function findBooksByExactTitle(title) {
  return prisma.book.findMany({
    where: {
      title: {
        equals: title,
        mode: 'insensitive',
      },
    },
    select: {
      id: true,
    },
  });
}

export function deleteBooksByIds(ids) {
  return prisma.book.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });
}
