---
title: Example GraphQL API
---

# Example GraphQL API

This is a simple GraphQL API that demonstrates basic CRUD operations for books and authors. It serves as a reference implementation for building GraphQL APIs with proper documentation.

## Overview

The API provides a straightforward way to manage books and authors with the following capabilities:

- **Query books** by title with optional filtering
- **Add new books** with author information
- **Add new authors** to the system
- **Nested data structures** for complex book information

## Main Features

### Books Management
- Retrieve books by their title
- Add new books with complete information
- Support for nested book information (dates, etc.)

### Authors Management  
- Add new authors to the system
- Associate authors with their books
- Query author information

### GraphQL Schema
The API uses a well-structured GraphQL schema with:
- **Types**: `Book`, `Author`, `BookInfo`
- **Input Types**: `BookInput`, `BookInfoInput` 
- **Queries**: `getBookByTitle`
- **Mutations**: `addBook`, `addAuthor`

## Getting Started

### Querying Books
To retrieve a book by its title:

```graphql
query GetBook($title: String!) {
  getBookByTitle(title: $title) {
    title
    author_name
    info {
      date
    }
  }
}
```

### Adding Books
To add a new book to the system:

```graphql
mutation AddBook($input: BookInput!) {
  addBook(input: $input) {
    title
    author_name
    info {
      date
    }
  }
}
```

### Adding Authors
To add a new author:

```graphql
mutation AddAuthor($name: String!) {
  addAuthor(name: $name) {
    name
    books
  }
}
```

## API Reference

For detailed information about all available types, queries, and mutations, visit the [API Reference](/docs/api-reference) section. The reference includes:

- Complete schema documentation
- Type definitions and descriptions
- Query and mutation examples
- Input type specifications

## Development

This API demonstrates best practices for GraphQL development including:
- Clear type definitions with descriptions
- Proper input validation
- Nested data structures
- Comprehensive documentation

The schema is designed to be easily extensible for additional features like book categories, ratings, or more complex author relationships.