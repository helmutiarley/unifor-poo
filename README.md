# Unifor OOP API

Simple book management API built with `Node.js`, `Express`, and `Prisma`, using Object-Oriented Programming concepts in the book domain.

## Requirements

- `Node.js` 18+
- `npm`
- Local `PostgreSQL` server

## Technologies

- `Node.js`
- `Express`
- `Prisma`
- `PostgreSQL`
- `OOP`

## Setup

1. Clone the project.
2. Install dependencies:

```bash
npm install
```

3. Create your `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the PostgreSQL connection in `.env`:

```env
SERVER_PORT=3000
DATABASE_URL="postgresql://your_user:your_password@localhost:5432/unifor_poo?schema=public"
```

## Database setup

If the database does not exist yet, create a PostgreSQL user and database.

Example:

```bash
sudo -u postgres psql
```

Then run:

```sql
CREATE ROLE "your_user" WITH LOGIN PASSWORD 'your_password';
CREATE DATABASE unifor_poo OWNER "your_user";
GRANT ALL PRIVILEGES ON DATABASE unifor_poo TO "your_user";
\q
```

## Running the project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Note:
- both `start` and `dev` run `prisma migrate deploy` before starting the API

## Migrations

Apply migrations manually:

```bash
npm run migrate:deploy
```

Create a new migration during development:

```bash
npm run migrate:up
```

Reset the local database:

```bash
npm run migrate:reset
```

## Project structure

```text
src/
  modules/
    books/
      controllers/
      entities/
      middlewares/
      repositories/
      routes/
      services/
  lib/
server.js
```

## OOP in this project

This project was designed to practice Object-Oriented Programming in a simple and practical way.

The main class used in the application is the `Book` class, located in:

- [src/modules/books/entities/book.entity.js](/Users/helmut.silva/Desktop/Projects/unifor-poo/src/modules/books/entities/book.entity.js:1)

It represents the book entity and applies OOP concepts such as:

- `Class`: `Book`
- `Object`: each book instance created from the `Book` class
- `Attributes`: `title`, `author`, and `quantity`
- `Methods`: behaviors such as validation, quantity update, and conversion to database format

The rest of the application is organized into controllers, services, repositories, and routes. This keeps the API easier to maintain while still allowing the project to demonstrate OOP in the domain layer.

## Architecture

The project is organized into layers so each part has a clear responsibility:

- `Routes`: define the available API endpoints
- `Controllers`: receive HTTP requests and return HTTP responses
- `Services`: contain the business rules of the application
- `Repositories`: communicate with the database through Prisma
- `Entities`: represent the domain objects, such as the `Book` class

This structure makes the code easier to read, maintain, and extend. It also helps separate technical concerns from domain logic, which is useful both for real projects and for understanding how OOP can organize software.

## Project scope

This project was created to validate and demonstrate Object-Oriented Programming concepts in a simple academic context.

Because of that, some concerns that are common in production systems were intentionally not a priority here, such as:

- advanced security mechanisms
- complete input validation
- authentication and authorization
- more complex architectural layers
- production hardening and scalability concerns

The goal of the project is to keep the code focused on the OOP concepts required by the assignment, especially the use of classes, objects, attributes, methods, and separation of responsibilities.

## Endpoints

### `GET /`

Returns the API status.

### `POST /books`

Creates a new book.

Body:

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "quantity": 3
}
```

### `GET /books`

Returns all books.

### `GET /books/title/:title`

Search books by title.

Example:

```text
GET /books/title/Clean Code
```

### `GET /books/author/:author`

Search books by author.

Example:

```text
GET /books/author/Robert C. Martin
```

### `PATCH /books/:id/quantity`

Updates the quantity of a book.

Body:

```json
{
  "quantity": 10
}
```

### `DELETE /books/title/:title`

Removes books by title.

## Testing with Postman

Local base URL:

```text
http://localhost:3000
```

Suggested flow:

1. `POST /books`
2. `GET /books`
3. `GET /books/title/:title`
4. `PATCH /books/:id/quantity`
5. `DELETE /books/title/:title`

## Notes

- the project uses Prisma with PostgreSQL
- the book title is unique in the database
- if a migration fails in your local environment, you may need to run:

```bash
npm run migrate:reset
```
