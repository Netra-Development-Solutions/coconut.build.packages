# @coconut-packages/jsonwebtoken

A Node.js utility for strong cryptography, offering AES-256 encryption, HMAC verification, and secure random number generation.

## Installation

To install the `@coconut-packages/jsonwebtoken` package, use the following command:

```sh
npm install @coconut-packages/jsonwebtoken
```

## Usage

To use the `@coconut-packages/jsonwebtoken` utility, follow the steps below:

### Importing the Package

First, import the package into your Node.js project:

```javascript
const jwt = require('@coconut-packages/jsonwebtoken');
```

### Environment Variables

The following environment variables are required for the `@coconut-packages/jsonwebtoken` utility:

- `JWT_SECRET`: A secret key used for signing and verifying tokens.
- `JWT_EXPIRATION`: The expiration time for the tokens (e.g., `1h`, `2d`).
- `JWT_ISSUER`: The issuer of the token, typically your application name.
- `JWT_AUDIENCE`: The audience for the token, usually the intended recipients.

Ensure these variables are set in your environment before using the utility.

### Example Code

Here is an example of how to use the `@coconut-packages/jsonwebtoken` utility:

```javascript
const jwt = require('@coconut-packages/jsonwebtoken');

// Environment variables (ensure these are set in your environment)
const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;
const issuer = process.env.JWT_ISSUER;
const audience = process.env.JWT_AUDIENCE;

// Payload for the token
const payload = {
    userId: '12345',
    username: 'exampleUser'
};

// Sign a token
const token = jwt.sign(payload, secret, {
    expiresIn: expiration,
    issuer: issuer,
    audience: audience
});

console.log('Generated Token:', token);

// Verify a token
try {
    const decoded = jwt.verify(token, secret, {
        issuer: issuer,
        audience: audience
    });
    console.log('Decoded Token:', decoded);
} catch (err) {
    console.error('Token verification failed:', err);
}
```