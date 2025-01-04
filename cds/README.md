# Central Data Service Wrapper over Axios

This repository contains a central data service script built over Axios to streamline and manage API calls. It is designed as a reusable package that can be imported into main applications.

## Features
- Simplifies API calls with dynamic configuration.
- Global error handling.
- Request and response interceptors for additional processing.
- Support for GET, POST, PUT, DELETE, and other HTTP methods.
- Base URL management.
- Easy to extend with retries, logging, and more.

## Installation

1. Install the package via npm or yarn:
   ```bash
   npm install central-data-service
   ```
   or
   ```bash
   yarn add central-data-service
   ```

2. Import and use the service in your main application.

## Usage

### 1. Import and Initialize

Import the central data service and optionally set the base URL:
```javascript
import CentralDataService from 'central-data-service';

// Default instance with base URL (example: https://api.example.com)
const apiService = new CentralDataService('https://api.example.com');
```

### 2. Sample Configurations

#### GET Request Config:
```javascript
const getConfig = {
  method: 'GET',
  url: '/users',
  params: { page: 1, limit: 10 }, // Query parameters
  headers: { Authorization: 'Bearer <token>' }, // Custom headers
};
```

#### POST Request Config:
```javascript
const postConfig = {
  method: 'POST',
  url: '/users',
  data: { name: 'John Doe', email: 'john.doe@example.com' }, // Request body
  headers: { Authorization: 'Bearer <token>' }, // Custom headers
};
```

### 3. Making API Calls

Call the `makeRequest` method with the configuration:

#### Fetching Users:
```javascript
async function fetchUsers() {
  try {
    const response = await apiService.makeRequest(getConfig);
    console.log('Users:', response);
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
}
```

#### Creating a User:
```javascript
async function createUser() {
  try {
    const response = await apiService.makeRequest(postConfig);
    console.log('User created:', response);
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
}
```

### 4. Extending Functionality

You can customize the Axios instance to include features like:
- **Authentication tokens:** Add logic to include tokens in the request headers.
- **Retries:** Add retry logic for failed requests.
- **Caching:** Implement caching for repeated requests.

Modify interceptors in the `CentralDataService` constructor as needed:
```javascript
this.client.interceptors.request.use(
  (config) => {
    // Add tokens or modify headers
    config.headers['Authorization'] = `Bearer <token>`;
    return config;
  },
  (error) => Promise.reject(error)
);
```

## Example Project Structure
```
src/
├── services/
│   └── CentralDataService.js
├── components/
│   └── ExampleComponent.js
├── App.js
└── index.js
```

## Dependencies
- [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.

## Contributing
Contributions are welcome! Feel free to submit a pull request or raise an issue for bug fixes, feature requests, or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

