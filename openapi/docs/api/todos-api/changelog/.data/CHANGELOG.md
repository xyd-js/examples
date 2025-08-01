## [0.2.0] - July 31, 2025

### ✨ Added

#### 🆕 Priority Levels for Todos

```json
{
  "priority": "high",
  "enum": ["low", "medium", "high"]
}
```

---

#### 🆕 Due Date Support

```json
{
  "due_date": "2025-01-15T18:00:00Z",
  "format": "date-time"
}
```

---

#### 🆕 Enhanced Error Handling

```json
{
  "Error": {
    "message": "Todo not found",
    "code": "TODO_NOT_FOUND",
    "details": { "id": "todo_123" }
  }
}
```

---

### 🛠 Changed

#### 🔄 `Todo` schema — now includes priority and due dates

**Before:**

```json
{
  "Todo": {
    "id": "string",
    "title": "string",
    "description": "string",
    "completed": "boolean",
    "created_at": "string"
  }
}
```

**After:**

```json
{
  "Todo": {
    "id": "string",
    "title": "string",
    "description": "string",
    "completed": "boolean",
    "priority": "string",
    "due_date": "string",
    "created_at": "string",
    "updated_at": "string"
  }
}
```

---

#### 🔄 `GET /todos` endpoint — now supports filtering and limits

**Before:** Always returned all todos  
**After:** Supports `completed` filter and `limit` parameter

```bash
GET /todos?completed=false&limit=20
```

---

### 🧹 Deprecated

#### ❌ `PATCH /todos/{id}/mark-complete` → use `PATCH /todos/{id}/complete`

**Old:**

```bash
PATCH /todos/123/mark-complete
```

**New:**

```bash
PATCH /todos/123/complete
```

---

### 🐞 Fixed

- ✅ `PUT /todos/{id}` now properly validates required fields
- ✅ `DELETE /todos/{id}` returns consistent 204 response
- ✅ `GET /todos/{id}` handles non-existent todos gracefully
- ✅ All timestamps now use ISO 8601 format consistently

---

## [0.1.1] - July 30, 2025

### ✨ Added

#### 🆕 Todo Description Field

```json
{
  "Todo": {
    "description": "string"
  },
  "TodoInput": {
    "description": "string"
  }
}
```

---

#### 🆕 Updated Timestamps

```json
{
  "Todo": {
    "updated_at": "string"
  }
}
```

---

### 🛠 Changed

#### 🔄 `POST /todos` response — now returns full Todo object

**Before:**

```json
{
  "id": "todo_123",
  "title": "New Task"
}
```

**After:**

```json
{
  "id": "todo_123",
  "title": "New Task",
  "description": "Optional description",
  "completed": false,
  "created_at": "2025-07-30T10:00:00Z"
}
```

---

### 🐞 Fixed

- ✅ `GET /todos` now returns todos in consistent order
- ✅ `completed` field defaults to `false` for new todos
- ✅ Input validation improved for required fields

---

## [0.1.0] - July 28, 2025

### ✨ Added

#### 🆕 Basic Todo CRUD Operations

```bash
# Create a new todo
POST /todos
{
  "title": "Buy groceries"
}

# Get all todos
GET /todos

# Get specific todo
GET /todos/{id}

# Update todo
PUT /todos/{id}
{
  "title": "Buy organic groceries"
}

# Delete todo
DELETE /todos/{id}
```

---

#### 🆕 Todo Object Schema

```json
{
  "Todo": {
    "id": "string",
    "title": "string",
    "completed": "boolean",
    "created_at": "string"
  }
}
```

---

#### 🆕 TodoInput for Mutations

```json
{
  "TodoInput": {
    "title": "string"
  }
}
```

--- 