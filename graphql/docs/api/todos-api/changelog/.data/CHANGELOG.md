## [0.2.0] - July 31, 2025

### ✨ Added

#### 🆕 Priority Levels for Todos

```graphql
enum Priority {
  low
  medium
  high
}

type Todo {
  priority: Priority!
  # ... other fields
}
```

---

#### 🆕 Due Date Support

```graphql
type Todo {
  due_date: String  # ISO 8601 format
  # ... other fields
}

input TodoInput {
  due_date: String
  # ... other fields
}
```

---

#### 🆕 Enhanced Error Handling

```graphql
type Error {
  message: String!
  code: String
  details: JSON
}
```

---

### 🛠 Changed

#### 🔄 `Todo` type — now includes priority and due dates

**Before:**

```graphql
type Todo {
  id: ID!
  title: String!
  description: String
  completed: Boolean!
  created_at: String!
  updated_at: String
}
```

**After:**

```graphql
type Todo {
  id: ID!
  title: String!
  description: String
  completed: Boolean!
  priority: Priority!
  due_date: String
  created_at: String!
  updated_at: String
}
```

---

#### 🔄 `getAllTodos` query — now supports filtering and limits

**Before:** Always returned all todos  
**After:** Supports `completed` filter and `limit` parameter

```graphql
query {
  getAllTodos(completed: false, limit: 20) {
    id
    title
    priority
  }
}
```

---

### 🧹 Deprecated

#### ❌ `markTodoComplete` mutation → use `completeTodo`

**Old:**

```graphql
mutation {
  markTodoComplete(id: "123")
}
```

**New:**

```graphql
mutation {
  completeTodo(id: "123") {
    id
    title
    completed
  }
}
```

---

### 🐞 Fixed

- ✅ `updateTodo` now properly validates required fields
- ✅ `deleteTodo` returns consistent boolean response
- ✅ `getTodoById` handles non-existent todos gracefully
- ✅ All timestamps now use ISO 8601 format consistently

---

## [0.1.1] - July 30, 2025

### ✨ Added

#### 🆕 Todo Description Field

```graphql
type Todo {
  description: String
  # ... other fields
}

input TodoInput {
  description: String
  # ... other fields
}
```

---

#### 🆕 Updated Timestamps

```graphql
type Todo {
  updated_at: String
  # ... other fields
}
```

---

### 🛠 Changed

#### 🔄 `createTodo` mutation — now returns full Todo object

**Before:**

```graphql
mutation {
  createTodo(input: { title: "New Task" }) {
    id
    title
  }
}
```

**After:**

```graphql
mutation {
  createTodo(input: { title: "New Task" }) {
    id
    title
    description
    completed
    created_at
  }
}
```

---

### 🐞 Fixed

- ✅ `getAllTodos` now returns todos in consistent order
- ✅ `completed` field defaults to `false` for new todos
- ✅ Input validation improved for required fields

---

## [0.1.0] - July 28, 2025

### ✨ Added

#### 🆕 Basic Todo CRUD Operations

```graphql
# Create a new todo
mutation {
  createTodo(input: { title: "Buy groceries" }) {
    id
    title
    completed
  }
}

# Get all todos
query {
  getAllTodos {
    id
    title
    completed
  }
}

# Get specific todo
query {
  getTodoById(id: "123") {
    id
    title
    completed
  }
}

# Update todo
mutation {
  updateTodo(id: "123", input: { title: "Buy organic groceries" }) {
    id
    title
    completed
  }
}

# Delete todo
mutation {
  deleteTodo(id: "123")
}
```

---

#### 🆕 Todo Object Type

```graphql
type Todo {
  id: ID!
  title: String!
  completed: Boolean!
  created_at: String!
}
```

---

#### 🆕 TodoInput for Mutations

```graphql
input TodoInput {
  title: String!
}
```

---

