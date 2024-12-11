# Contributing to Blockchain Services

We’re excited that you’re interested in contributing to the **Blockchain Services** project! Whether you’re a seasoned developer or new to the world of open-source blockchain technology, your contributions are invaluable in shaping the future of this project. To ensure a smooth and efficient collaboration, we’ve laid out some easy-to-follow guidelines for you to get started and contribute effectively.

## Why Contribute?

Contributing to the **Blockchain Services** project offers a unique opportunity to engage with cutting-edge blockchain technologies, improve decentralized systems, and enhance the open-source ecosystem. By becoming a part of this initiative, you’ll be working with a talented group of developers who are dedicated to simplifying blockchain operations, abstracting complexity, and building scalable, secure solutions for the community.

Your contributions—whether in the form of **code**, **documentation**, or **ideas**—will help advance the blockchain landscape, providing the necessary infrastructure for developers to build and interact with decentralized applications (dApps), cryptocurrency wallets, and enterprise-grade blockchain systems. So let’s get started!

## Getting Started

### Setting Up the Development Environment

Before you start contributing, you’ll need to set up your **development environment**. This is a crucial step to ensure that you can run the project locally and make meaningful contributions. Follow these steps carefully:

---

1. **Clone the Repository**

   The first step in contributing to **Blockchain Services** is to clone the repository to your local machine. You can do this by running the following command in your terminal:

   ```sh
   git clone https://github.com/epicchainlabs/blockchain-services
   ```

   This will create a copy of the project in your local development environment, allowing you to access all the files, code, and resources you need to start contributing.

---

2. **Install Rush**

   Once you’ve cloned the repository, the next step is to install **Rush**, a monorepo management tool that helps us manage multiple packages and dependencies in the project. Rush makes it easy to manage our large codebase, so it’s essential to have it set up correctly. Run the following command:

   ```sh
   cd blockchain-services
   npm i -g @microsoft/rush
   ```

   By installing **Rush**, you’re preparing your system to handle the complex dependencies that come with a large-scale blockchain project like **Blockchain Services**.

---

3. **Install Dependencies**

   Now that Rush is installed, the next step is to install the necessary dependencies for the project. This will ensure that all the packages required to build and run the project are downloaded and configured. You can install these dependencies by running:

   ```sh
   rush update
   ```

   This command will go through the entire project and install all required dependencies. This is an essential step before you can start working on the project.

---

4. **Build the Dependencies**

   The last setup step involves rebuilding the dependencies to ensure everything is up to date. This will compile and optimize all the packages in the project so that you can start contributing with a clean, functional environment.

   ```sh
   rush rebuild
   ```

   This ensures that all the code is compiled, dependencies are built correctly, and you are ready to begin contributing.

---

### Testing Your Changes

In **Blockchain Services**, we take testing seriously to ensure that each package works as expected. Testing is a vital part of the development process because it allows us to detect and fix issues early. When you contribute, you’ll need to write tests for your code or ensure that existing tests are passing.

Packages that implement support for a blockchain have **test cases** located under the `packages/<package_name>/src/__tests__` directory. These tests ensure the functionality of each package, and they are crucial for maintaining the quality and stability of the project.

#### Running Tests

To run the tests for a specific package, follow these steps:

---

1. **Rebuild the Project**

   Ensure that the project is rebuilt with the latest code changes. Run the following command to rebuild everything:

   ```sh
   rush rebuild
   ```

---

2. **Navigate to the Package Directory**

   Change into the package directory where you’ve made your changes or where the tests you want to run are located. For example:

   ```sh
   cd packages/<package_name>
   ```

---

3. **Run the Tests**

   Now that you’re in the right directory, run the test suite for the package. You can use **Rushx** to run the tests, and if you want to run all the tests for that specific package, simply omit the test file path:

   ```sh
   rushx test <optional_test_path>
   ```

   If you want to run a specific test file or test case, provide the optional path to the test file:

   ```sh
   rushx test <path_to_test_file>
   ```

   This will execute the relevant test suite and let you know if everything is working as expected.

---

If you omit the test file path, **Rush** will automatically run all the tests for that package. This is a quick and easy way to ensure that your changes haven’t caused any unintended side effects.

---

## Best Practices for Contributing

In order to keep the **Blockchain Services** project clean, efficient, and maintainable, we follow a few best practices for contributions. Please take these into consideration before submitting your code:

---

1. **Write Clear and Concise Commit Messages**

   When you make a change, ensure that your commit messages are clear and descriptive. The message should describe what the commit does and why the change is necessary. A well-written commit message helps reviewers understand your changes more easily.

   Example commit message:
   ```sh
   fix: resolve issue with mnemonic generation in Asteroid SDK
   ```

---

2. **Test Your Changes Thoroughly**

   As we mentioned earlier, testing is crucial. Before submitting your pull request (PR), make sure to run all the tests for the packages you’ve worked on. If you’ve added new functionality or changed existing code, write corresponding tests to validate your changes.

---

3. **Keep Your Fork Up to Date**

   If you’re contributing via a fork, make sure to regularly sync your fork with the **main repository** to avoid conflicts. This will help you stay updated with the latest changes and prevent merge issues when you submit your pull request.

---

4. **Follow Code Style Guidelines**

   We strive to maintain a consistent coding style throughout the project. Make sure your code follows the style guidelines of the **Blockchain Services** project. This ensures that the code is readable and maintainable by everyone.

---

5. **Submit a Pull Request (PR)**

   Once you’ve made your changes and tested them thoroughly, it’s time to submit your **pull request**. When creating a PR, provide a detailed description of the changes you’ve made, the problem it solves, and any relevant context. This will help the maintainers review your PR more efficiently.

---

6. **Engage with the Community**

   If you’re unsure about any aspect of the project or need guidance, don’t hesitate to ask! Join our discussions, raise issues, or share your ideas. The open-source community is a great place to learn, collaborate, and contribute together.

---

## Conclusion

We’re thrilled to have you contribute to the **Blockchain Services** project! By following the setup instructions and adhering to the best practices outlined above, you’ll be able to make meaningful contributions to one of the most exciting and innovative open-source blockchain initiatives. Together, we can create a platform that simplifies blockchain operations, supports developers, and helps accelerate the adoption of decentralized applications. So, get involved, make your impact, and let’s build something amazing!