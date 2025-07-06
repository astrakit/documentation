---
description: Learn about Astrakit's end-to-end RSA and Zero-Knowledge encryption technologies that protect your privacy.
---
# How does Astrakit's security work?

Astrakit employs two optional powerful encryption technologies to keep your data private and secure: End-to-End RSA Encryption and Zero-Knowledge Encryption. Let's break down what these mean for you.

---

## Temporary Message Storage

### How it works
- Messages are only stored on our servers until they're delivered and read by everyone
- Once a message is read by the recipient, it's automatically deleted from our servers
- Your conversations exist only on your devices, not in our cloud

### What this means for you
- Your message history isn't permanently stored on our servers
- There's no long-term record of your conversations on Astrakit's infrastructure
- This further reduces the risk of data exposure in the unlikely event of a server breach

---

## End-to-End RSA Encryption

### What is it?
End-to-End RSA encryption (E2E RSA) ensures that only you and the people you're communicating with can read your messages. Not even Astrakit can access your encrypted content.

### How it works
1. **Key generation**: When you set up Astrakit, it creates two mathematical keys - a public key and a private key.
2. **Encryption**: When someone sends you a message, it's locked using your public key.
3. **Decryption**: Only your private key (which never leaves your device) can unlock messages encrypted with your public key.

### What this means for you
- Your messages remain private, even if someone intercepts them
- Nobody can read your messages without your private key
- Even if Astrakit's servers were compromised, your messages stay secure

## Zero-Knowledge Encryption

### What is it?
Zero-Knowledge (ZK) encryption means Astrakit knows nothing about your data. We can store and process your information without actually seeing its contents.

### How it works
1. **Local encryption**: Your data is encrypted on your device before it reaches our servers
2. **Proof without revelation**: ZK protocols let us verify operations on your data without knowing what the data is
3. **Trust through mathematics**: The system mathematically guarantees privacy without requiring you to trust us

### What this means for you
- Astrakit can't access your sensitive information
- We can still provide services without seeing your private data
- You maintain complete control over your information

---

## Practical Benefits

- **True privacy**: Your personal conversations and data belong only to you
- **Protection from data breaches**: Even if attackers gained access to our servers, your data remains encrypted
- **No backdoors**: The mathematical nature of these systems means there are no "master keys"

For more technical details about our implementation, visit our [Developer Documentation](https://astrakit.cc/security).