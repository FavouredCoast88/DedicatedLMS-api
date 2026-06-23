# Dedicated News API

A REST API built with Node.js and Express for managing news articles and integrating external news data.

## Features

- CRUD Operations for Articles
- JWT Authentication
- Validation Middleware
- Error Handling
- Axios External API Integration
- Morgan Logging
- Winston Logging
- Jest Testing
- Docker Support

## Technologies Used

- Node.js
- Express.js
- JWT (JSON Web Tokens)
- Axios
- Morgan
- Winston
- Jest
- Docker

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
npm start
```

The API runs on:

```text
http://localhost:3000
```

## Authentication

Generate a JWT token by logging in:

```http
POST /auth/login
```

Example Request:

```json
{
  "username": "Jannie"
}
```

Use the returned token in protected routes:

```text
Authorization: Bearer <token>
```

## API Endpoints

### Articles

- GET /articles
- GET /articles/:id
- GET /articles/search
- POST /articles
- PUT /articles/:id
- PATCH /articles/:id
- DELETE /articles/:id

### Authentication

- POST /auth/login

### External News

- GET /news

## Running Tests

```bash
npm test
```

## Docker

Build the image:

```bash
docker build -t dedicated-news-api .
```

Run the container:

```bash
docker run -p 3000:3000 dedicated-news-api
```
