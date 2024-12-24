@epicchain/bs-asteroid-sdk

---

# Overview
@epicchain/bs-asteroid-sdk is an auxiliary package built to facilitate mnemonic generation, leveraging the powerful @moonlight-io/asteroid-sdk-js. This package ensures secure wallet creation by generating mnemonics that can be used for private key backup, key recovery, and secure transactions.

Designed with blockchain developers in mind, this package provides an essential tool for implementing wallet creation features in a safe and reliable manner. Whether you’re developing a decentralized application (dApp) or integrating blockchain capabilities into your software, @epicchain/bs-asteroid-sdk enables the secure management of wallets through mnemonics, ensuring peace of mind for developers and users alike.

---

# Key Features
- **Mnemonic Generation:** Securely generates mnemonic phrases that can be used for wallet creation, key recovery, and private key backup.
- **Seamless Integration with Asteroid SDK:** Built on top of @moonlight-io/asteroid-sdk-js, ensuring compatibility and reliability for generating mnemonics and managing blockchain wallets.
- **Private Key Backup:** Use mnemonics to safely store and backup private keys, reducing the risk of losing access to blockchain wallets or funds.
- **Key Recovery:** Restore access to blockchain wallets using generated mnemonics, making it easier to recover lost or forgotten keys.
- **Secure Transactions:** Enables secure transactions by utilizing mnemonics for key management, ensuring that your wallet’s private keys are safely stored and not exposed.
- **Easy-to-Use API:** Simple and intuitive API designed for blockchain developers to quickly integrate mnemonic generation into their projects without hassle.
- **Cross-Platform Support:** Can be used in both Node.js and browser environments, making it flexible and adaptable for different use cases.
- **Trusted and Secure:** The package is designed with security as a top priority, ensuring that wallet creation and key management features are protected from vulnerabilities.

---

# Installation

You can easily install @epicchain/bs-asteroid-sdk into your project using either npm or yarn.

**Using npm**
```bash
npm install @epicchain/bs-asteroid-sdk
```

**Using yarn**
```bash
yarn add @epicchain/bs-asteroid-sdk
```

Once installed, you can start using the features and APIs provided by this package.

---

# Basic Usage

### Generate a Mnemonic
To start, you need to generate a mnemonic that can be used to create a wallet.
```javascript
const { MnemonicGenerator } = require('@epicchain/bs-asteroid-sdk');

// Create a new instance of the MnemonicGenerator
const mnemonicGenerator = new MnemonicGenerator();

// Generate a mnemonic (12 words by default)
const mnemonic = mnemonicGenerator.generate();
console.log('Generated Mnemonic:', mnemonic);
```

### Wallet Creation from Mnemonic
Once you have a mnemonic, you can use it to create a wallet and manage private keys.
```javascript
const { Wallet } = require('@epicchain/bs-asteroid-sdk');

// Create a wallet instance using the generated mnemonic
const wallet = new Wallet(mnemonic);

// Get the wallet address
const walletAddress = wallet.getAddress();
console.log('Wallet Address:', walletAddress);

// Get the private key (ensure secure storage of the private key)
const privateKey = wallet.getPrivateKey();
console.log('Private Key:', privateKey);
```

### Key Recovery from Mnemonic
If you ever lose access to the wallet, you can recover it using the original mnemonic phrase.
```javascript
const recoveredWallet = new Wallet(mnemonic);
const recoveredWalletAddress = recoveredWallet.getAddress();
console.log('Recovered Wallet Address:', recoveredWalletAddress);
```

---

# API Documentation

## MnemonicGenerator
The `MnemonicGenerator` class is responsible for generating secure mnemonics.

### Methods
- **`generate()`**: Generates a new mnemonic phrase. By default, it generates a 12-word mnemonic.
  - **Returns:** `string` - The generated mnemonic phrase.

## Wallet
The `Wallet` class is used to manage wallet creation, private keys, and addresses.

### Constructor
- **`new Wallet(mnemonic: string)`**: Creates a new wallet instance using a provided mnemonic phrase.
  - **Parameters:**
    - `mnemonic (string)`: A 12-word mnemonic phrase used to generate the wallet.

### Methods
- **`getAddress()`**: Returns the wallet address associated with the mnemonic.
  - **Returns:** `string` - The wallet address.

- **`getPrivateKey()`**: Returns the private key associated with the wallet.
  - **Returns:** `string` - The private key for the wallet.

---

# Example Projects

Here are a few examples of projects that can benefit from integrating @epicchain/bs-asteroid-sdk:

- **Blockchain Wallet:** A wallet application for storing and managing cryptocurrency and tokens with backup and recovery features.
- **DeFi Applications:** Decentralized Finance (DeFi) platforms where users need secure wallet management for transactions and token management.
- **NFT Marketplaces:** Marketplaces for buying, selling, and trading NFTs where secure wallet access and key recovery are essential.
- **Blockchain dApps:** Decentralized applications requiring wallet generation and secure transactions on blockchain networks.

---

# Contributing

We welcome contributions from the community! If you'd like to contribute to the development of @epicchain/bs-asteroid-sdk, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with a descriptive message.
4. Submit a pull request with a clear explanation of what you’ve changed.

We encourage you to write tests and ensure that your changes don’t break any existing functionality. Contributions that improve documentation, performance, or usability are highly appreciated.

---

# Contact

For support, inquiries, or feedback, feel free to contact us at:

- **Email:** support@epic-chain.org
- **Website:** [https://epic-chain.org](https://epic-chain.org)

---

@epicchain/bs-asteroid-sdk — Secure. Reliable. Developer-Friendly.

