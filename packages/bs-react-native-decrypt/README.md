# EpicChain React Native Decrypt SDK - `@epicchain/bs-react-native-decrypt`

## Overview

`@epicchain/bs-react-native-decrypt` is an essential package designed for mobile developers aiming to build blockchain-enabled applications using React Native. This SDK empowers developers with secure, native methods to decrypt private keys and other sensitive data, ensuring these operations are performed with maximum security on both Android and iOS platforms.

The package is tailored for the EpicChain blockchain ecosystem and is optimized to handle private key decryption and key management seamlessly. With cross-platform compatibility and native support, it delivers top-tier security and performance, making it the ideal choice for creating decentralized applications (dApps) on mobile devices. By providing ease of integration, `@epicchain/bs-react-native-decrypt` reduces complexity, allowing developers to focus on building innovative blockchain solutions.

---

## Features

### 1. **Native Decryption Support**
- Implements secure, native code on Android and iOS for decrypting sensitive blockchain data such as private keys.
- Ensures efficient and reliable decryption processes while maintaining compatibility with mobile-specific security protocols.

### 2. **Secure Key Management**
- Handles private keys and critical data with stringent security standards.
- Prevents unauthorized access to sensitive data by leveraging platform-specific secure storage mechanisms like Keychain (iOS) and Keystore (Android).

### 3. **Cross-Platform Compatibility**
- Fully compatible with React Native applications running on Android and iOS.
- Provides a consistent API across platforms to streamline the development process.

### 4. **Blockchain-Optimized**
- Specially optimized for the EpicChain blockchain ecosystem.
- Supports features like wallet integration, transaction signing, and secure communication with the blockchain.

### 5. **Ease of Integration**
- Minimal setup required to integrate the package into your project.
- Developer-friendly APIs and detailed documentation simplify the process of adding decryption and security functionalities.

### 6. **Real-Time Performance**
- Enables quick and efficient decryption operations, ensuring smooth user experiences in blockchain applications.
- Optimized for speed, making it suitable for time-sensitive use cases such as DeFi apps and blockchain wallets.

---

## Installation

### Using npm
```bash
npm install @epicchain/bs-react-native-decrypt
```

### Using yarn
```bash
yarn add @epicchain/bs-react-native-decrypt
```

---

## Additional Setup

### iOS
After installing the package, ensure you install the native dependencies using CocoaPods:

```bash
cd ios && pod install
```

### Android
No additional setup is required for Android. The package automatically links the native dependencies when installed.

---

## Usage

The following examples demonstrate how to integrate and use the package in your React Native project.

### Example: Decrypting a Private Key

#### Import the package:
```javascript
import { decryptPrivateKey } from '@epicchain/bs-react-native-decrypt';
```

#### Use the decryption method:
```javascript
const encryptedKey = 'encrypted-private-key-string';
const passphrase = 'your-secure-passphrase';

async function decryptKey() {
  try {
    const privateKey = await decryptPrivateKey(encryptedKey, passphrase);
    console.log('Decrypted Private Key:', privateKey);
  } catch (error) {
    console.error('Decryption failed:', error);
  }
}

decryptKey();
```

### Secure Storage Example
You can securely store and retrieve sensitive data such as decrypted private keys using the following methods:

#### Storing a Key Securely:
```javascript
import { storeKeySecurely } from '@epicchain/bs-react-native-decrypt';

async function storeKey() {
  try {
    await storeKeySecurely('privateKey', 'decrypted-private-key');
    console.log('Private key stored securely!');
  } catch (error) {
    console.error('Error storing private key:', error);
  }
}

storeKey();
```

#### Retrieving a Securely Stored Key:
```javascript
import { retrieveSecureKey } from '@epicchain/bs-react-native-decrypt';

async function retrieveKey() {
  try {
    const privateKey = await retrieveSecureKey('privateKey');
    console.log('Retrieved Private Key:', privateKey);
  } catch (error) {
    console.error('Error retrieving private key:', error);
  }
}

retrieveKey();
```

---

## API Reference

### `decryptPrivateKey(encryptedKey: string, passphrase: string): Promise<string>`
Decrypts an encrypted private key using the provided passphrase.

**Parameters:**
- `encryptedKey` (string): The encrypted private key string.
- `passphrase` (string): The passphrase used for decryption.

**Returns:**
- A promise that resolves to the decrypted private key as a string.

---

### `secureStorageEnabled(): Promise<boolean>`
Checks if the device has secure storage enabled (e.g., Keychain on iOS or Keystore on Android).

**Returns:**
- A promise that resolves to `true` if secure storage is enabled, otherwise `false`.

---

### `storeKeySecurely(key: string, value: string): Promise<void>`
Stores a key-value pair securely on the device.

**Parameters:**
- `key` (string): The key under which the value will be stored.
- `value` (string): The value to store securely.

**Returns:**
- A promise that resolves when the key-value pair is securely stored.

---

### `retrieveSecureKey(key: string): Promise<string>`
Retrieves a securely stored value by its key.

**Parameters:**
- `key` (string): The key for the stored value.

**Returns:**
- A promise that resolves to the stored value.

---

## Use Cases

The package can be utilized in a variety of scenarios, including but not limited to:

- **Blockchain Wallets:** Safely decrypt and manage private keys for cryptocurrency transactions.
- **DeFi Applications:** Enable secure, real-time interactions with decentralized financial protocols.
- **dApps:** Facilitate secure authentication and transaction signing for decentralized applications.
- **Secure Data Storage:** Store and retrieve sensitive information, such as tokens and keys, securely on mobile devices.

---

## Contributing

We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push your changes: `git push origin feature-name`.
5. Open a pull request and provide a detailed description of your changes.

### Contribution Guidelines
- Ensure your changes are thoroughly tested.
- Write clear and concise commit messages.
- Provide detailed documentation for new features or updates.

---

## License

This package is licensed under the **MIT License**. See the LICENSE file for details.

---

## Support

For questions, issues, or feature requests, reach out to our support team:

- **Email:** [support@epic-chain.org](mailto:support@epic-chain.org)
- **Website:** [https://epic-chain.org](https://epic-chain.org)

---

Build secure and efficient blockchain-enabled mobile applications with ease using `@epicchain/bs-react-native-decrypt`!

