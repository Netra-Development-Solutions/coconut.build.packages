# ResponseHandler Utility

`ResponseHandler` is a lightweight JavaScript utility designed to standardize response structures in your application. It helps ensure consistency and clarity when returning success, error, or validation responses from APIs or internal services.

## Features

1. **Success Responses**: Return a structured success response with optional metadata.
2. **Error Responses**: Handle errors with detailed messages, custom error codes, and support for multiple errors.
3. **Validation Errors**: Provide a consistent format for validation-related errors.
4. **Not Found Responses**: Simplify responses for missing resources.
5. **Custom Metadata**: Include additional metadata like pagination details.
6. **Centralized Logging (Optional)**: Log errors for debugging purposes.

---

## Installation

Simply copy the `ResponseHandler` class into your project. You can also export it as a module if using a modern JavaScript environment.

---

## Usage

### 1. Success Responses
```javascript
const successResponse = ResponseHandler.success(
  { id: 1, name: "Sample Data" },
  "Data fetched successfully",
  200,
  { page: 1, limit: 10 } // Metadata
);
console.log(successResponse);
```
**Output:**
```json
{
  "status": "success",
  "statusCode": 200,
  "message": "Data fetched successfully",
  "data": {
    "id": 1,
    "name": "Sample Data"
  },
  "meta": {
    "page": 1,
    "limit": 10
  }
}
```

---

### 2. Error Responses
```javascript
const errorResponse = ResponseHandler.error(
  "Database connection failed",
  500,
  ["Connection timeout", "Invalid credentials"],
  "DB_CONN_ERROR"
);
console.log(errorResponse);
```
**Output:**
```json
{
  "status": "error",
  "statusCode": 500,
  "message": "Database connection failed",
  "errorCode": "DB_CONN_ERROR",
  "errors": ["Connection timeout", "Invalid credentials"]
}
```

---

### 3. Validation Error Responses
```javascript
const validationResponse = ResponseHandler.validationError(
  [{ field: "email", message: "Email is required" }],
  "Validation errors occurred"
);
console.log(validationResponse);
```
**Output:**
```json
{
  "status": "fail",
  "statusCode": 400,
  "message": "Validation errors occurred",
  "errorCode": "VALIDATION_ERROR",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```

---

### 4. Not Found Responses
```javascript
const notFoundResponse = ResponseHandler.notFound("User not found", 404, { userId: 123 });
console.log(notFoundResponse);
```
**Output:**
```json
{
  "status": "error",
  "statusCode": 404,
  "message": "User not found",
  "meta": {
    "userId": 123
  }
}
```

---

## Methods

### `success(data, message, statusCode, meta)`
- **data**: (Object) The main response data.
- **message**: (String) A message describing the success.
- **statusCode**: (Number) The HTTP status code (default: 200).
- **meta**: (Object) Optional metadata (e.g., pagination).

### `error(message, statusCode, errors, errorCode)`
- **message**: (String) Error message.
- **statusCode**: (Number) HTTP status code (default: 500).
- **errors**: (Array or Object) Details about the errors (default: []).
- **errorCode**: (String) A custom error code for debugging.

### `validationError(errors, message, statusCode, errorCode)`
- **errors**: (Array) An array of validation errors (e.g., field-level errors).
- **message**: (String) A message describing the validation failure.
- **statusCode**: (Number) HTTP status code (default: 400).
- **errorCode**: (String) A custom error code (default: "VALIDATION_ERROR").

### `notFound(message, statusCode, meta)`
- **message**: (String) A message describing the missing resource.
- **statusCode**: (Number) HTTP status code (default: 404).
- **meta**: (Object) Additional context for the not-found response.

---

## Centralized Error Logging (Optional)

The `logError` method can be used to log errors for debugging purposes.
```javascript
ResponseHandler.logError(errorResponse);
```

---

## Contribution
Feel free to fork this repository and submit pull requests for additional features or improvements.

---

## License
This utility is released under the MIT License. Use it freely in your projects.
