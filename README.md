# cypressConstructweek2
Functionality - Register, Login, Logout
Cypress Automation Project:
TutorialsNinja - Register, Login, Logout
Objective
This project automates the user flow for Register, Login, and Logout functionality on the
TutorialsNinja website using Cypress.
Tools and Technologies Used
 - Programming Language: JavaScript
 - Automation Framework: Cypress
 - Browser: Chrome or Electron (Default Browser)
 - IDE/Text Editor: Visual Studio Code (VSCode)
 - Version Control: GitHub

Prerequisites
To successfully run this project, ensure you have the following:
- Basic knowledge of JavaScript.
- Familiarity with Cypress and basic web elements such as id, class, and name.
- Installed Node.js and Visual Studio Code.
Setup Instructions
Part 1: Environment Setup
1. Install VSCode:
 - Download and install VSCode from its official website.
2. Create a New Folder for the Project:
 - Open VSCode and create a new folder for the Cypress automation project.
3. Install Cypress:
 - Open the terminal in VSCode and run the following commands to initialize the project
and install Cypress:
 ```
 npm init -y
 npm install cypress --save-dev
 ```
 - Open Cypress once installed:
 ```
 npx cypress open
 ```
Part 2: Writing the Script
1. Create a New Folder Structure:
 - Create folders to organize the Page Object Model (POM):
 - cypress/integration/PageTests: For test cases.
 - cypress/support/PageClasses: For commands and functions.
 - cypress/pages/: For Page Object files.
2. Install Required Dependencies:
 - If needed, install additional Cypress plugins or dependencies via npm.
Part 3: Assignment Tasks Automation
1. Register New Account:
 - Automate the registration process by filling out required fields (First Name, Last Name,
Email, etc.) and submitting the form.
2. Login and Logout:
 - Log in using the test credentials and automate the logout process.
 - Take screenshots where required and use assertions for validation.
Part 4: Submission Guidelines
1. Push Code to GitHub:
 - After completing the script, initialize a Git repository and push the project to GitHub:
 ```
 git init
 git add .
 git commit -m 'Initial commit for Cypress automation project'
 git remote add origin https://github.com/Kunal-30/Global-Code-Innovators_083.git
 git push -u origin main
 ```
2. Submission:
 - Ensure the code is properly commented, explaining each section and logic.
 - Push the final code to GitHub and submit the repository link on the LMS.
Project Structure
```
├── cypress
│ ├── integration
│ │ PageTests # test1.js
│ ├── PageClasses
│ │ ├── RegisterPage.js # Register Page Object
│ │ ├── LoginPage.js # Login Page Object
│ │ ├── LogoutPage.js # Logout Page Object
│ ├── support
│ │ └── commands.js # Custom Cypress commands (if any)
├── cypress.json # Cypress conϐiguration ϐile
├── package.json # Project dependencies
```
Test Data
Use the following test data:
- Email: tagdekunal2000@gmail.com
- Password: Lazy123
Cypress Commands Used
- cy.get(): To locate web elements.
- cy.type(): To enter data into input fields.
- cy.click(): To simulate button clicks.
- cy.contains(): To locate text or buttons by their content.
- cy.url(): To assert URL changes.
Key Features
- Page Object Model (POM): The project is structured using POM for maintainability.
- Assertions: Use of Cypress assertions for validating success of registration, login, and
logout actions.
- Screenshots: Automatically take screenshots after each major action.
How to Run the Tests
1. Clone the repository:
 ```bash
 git clone <repository-url>
 cd <project-folder>
 ```
2. Install project dependencies:
 ```bash
 npm install
 ```
3. Run Cypress tests:
 ```bash
 npx cypress open
 ```
 - This will open the Cypress Test Runner. You can then select the test files to run.
Evaluation Criteria
- Correctness: The script should successfully automate the register, login, and logout
process.
- Code Quality: Proper use of functions, error handling, and code readability.
- Documentation: Proper comments and explanation for each section of the script.
Conclusion
This project demonstrates automation of the TutorialsNinja website using Cypress,
following best practices like POM, assertions, and GitHub integration for code versioning. 
