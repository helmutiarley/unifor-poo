# Unifor POO API

API simples para gerenciamento de livros, desenvolvida com `Node.js`, `Express` e `Prisma`.

## Requisitos

- `Node.js` 18+ 
- `npm`
- `PostgreSQL` rodando localmente

## Tecnologias

- `Node.js`
- `Express`
- `Prisma`
- `PostgreSQL`

## Configuracao

1. Clone o projeto.
2. Instale as dependencias:

```bash
npm install
```

3. Crie o arquivo `.env` com base no `.env.example`:

```bash
cp .env.example .env
```

4. Ajuste a conexao com o PostgreSQL no `.env`:

```env
SERVER_PORT=3000
DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/unifor_poo?schema=public"
```

## Preparando o banco

Se o banco ainda nao existir, crie um usuario e um banco no PostgreSQL.

Exemplo no terminal:

```bash
sudo -u postgres psql
```

Depois, no `psql`:

```sql
CREATE ROLE "seu_usuario" WITH LOGIN PASSWORD 'sua_senha';
CREATE DATABASE unifor_poo OWNER "seu_usuario";
GRANT ALL PRIVILEGES ON DATABASE unifor_poo TO "seu_usuario";
\q
```

## Executando o projeto

Modo desenvolvimento:

```bash
npm run dev
```

Modo normal:

```bash
npm start
```

Observacao:
- os scripts `start` e `dev` executam `prisma migrate deploy` antes de subir a API

## Migrations

Aplicar migrations manualmente:

```bash
npm run migrate:deploy
```

Criar uma nova migration em desenvolvimento:

```bash
npm run migrate:up
```

Resetar o banco local:

```bash
npm run migrate:reset
```

## Estrutura do projeto

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

## Endpoints

### `GET /`

Retorna o status basico da API.

### `POST /books`

Cria um livro.

Body:

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "quantity": 3
}
```

### `GET /books`

Lista todos os livros.

### `GET /books/title/:title`

Busca livros por titulo.

Exemplo:

```bash
GET /books/title/Clean Code
```

### `GET /books/author/:author`

Busca livros por autor.

Exemplo:

```bash
GET /books/author/Robert C. Martin
```

### `PATCH /books/:id/quantity`

Atualiza a quantidade de um livro.

Body:

```json
{
  "quantity": 10
}
```

### `DELETE /books/title/:title`

Remove livros pelo titulo.

## Testando com Postman

Base URL local:

```text
http://localhost:3000
```

Fluxo sugerido:

1. `POST /books`
2. `GET /books`
3. `GET /books/title/:title`
4. `PATCH /books/:id/quantity`
5. `DELETE /books/title/:title`

## Observacoes

- o projeto usa Prisma com PostgreSQL
- o titulo do livro esta definido como unico no banco
- se uma migration falhar no ambiente local, pode ser necessario rodar:

```bash
npm run migrate:reset
```
