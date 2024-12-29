const crypto = require('crypto');

// Generate a 256-bit (32 bytes) key for AES-256-GCM
const aesKey = crypto.randomBytes(32);

// Generate a 12-byte (96 bits) IV for AES-GCM
const aesIv = crypto.randomBytes(12);

console.log('AES Key (Hex):', aesKey.toString('hex'));
console.log('AES IV (Hex):', aesIv.toString('hex'));
