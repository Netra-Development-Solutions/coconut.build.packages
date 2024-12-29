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
```sh
# Algorithm for JWT signing and verification
JWT_ALGORITHM=HS256

# Algorithm for AES encryption
ENCRYPTION_ALGORITHM=aes-256-gcm
```
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

### Generating AES Key and IV

To generate a 256-bit AES key and a 12-byte IV for AES-GCM, you can use the following code:

```javascript
const crypto = require('crypto');

// Generate a 256-bit (32 bytes) key for AES-256-GCM
const aesKey = crypto.randomBytes(32);

// Generate a 12-byte (96 bits) IV for AES-GCM
const aesIv = crypto.randomBytes(12);

console.log('AES Key (Hex):', aesKey.toString('hex'));
console.log('AES IV (Hex):', aesIv.toString('hex'));
```

This will output the AES key and IV in hexadecimal format, which can be used for encryption and decryption.