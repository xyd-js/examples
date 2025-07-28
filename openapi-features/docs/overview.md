---
title: Example OpenAPI API
---

# Example OpenAPI API

This is a simple OpenAPI API that demonstrates basic CRUD operations for books and authors. It serves as a reference implementation for building REST APIs with proper documentation.

## Overview

The API provides a straightforward way to manage books and authors with the following capabilities:

- **Get books** by title with optional filtering
- **Create new books** with author information
- **Add new authors** to the system
- **Nested data structures** for complex book information

## Main Features

### Books Management
- Retrieve books by their title
- Create new books with complete information
- Support for nested book information (dates, etc.)

### Authors Management  
- Add new authors to the system
- Associate authors with their books
- Query author information

### OpenAPI Specification
The API uses a well-structured OpenAPI specification with:
- **Schemas**: `Book`, `Author`, `BookInfo`
- **Request/Response Models**: `BookInput`, `BookInfoInput` 
- **Endpoints**: `GET /books/{title}`, `POST /books`, `POST /authors`
- **HTTP Methods**: GET, POST, PUT, DELETE

## Getting Started

### Getting Books
To retrieve a book by its title:

```bash
curl -X GET "https://api.example.com/books/{title}" \
  -H "accept: application/json"
```

### Creating Books
To add a new book to the system:

```bash
curl -X POST "https://api.example.com/books" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Great Gatsby",
    "author_name": "F. Scott Fitzgerald",
    "info": {
      "date": "1925-04-10"
    }
  }'
```

### Adding Authors
To add a new author:

```bash
curl -X POST "https://api.example.com/authors" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "F. Scott Fitzgerald"
  }'
```

## API Reference

For detailed information about all available endpoints, schemas, and request/response models, visit the [API Reference](/docs/api-reference) section. The reference includes:

- Complete OpenAPI specification
- Schema definitions and descriptions
- Endpoint documentation with examples
- Request/response model specifications

## Development

This API demonstrates best practices for REST API development including:
- Clear schema definitions with descriptions
- Proper input validation
- Nested data structures
- Comprehensive documentation

The OpenAPI specification is designed to be easily extensible for additional features like book categories, ratings, or more complex author relationships.