// We have to import classes
import urltest from "../cypress/support/pageClass/urltest";
import register from "../cypress/support/pageClass/register";
import logOut from "../cypress/support/pageClass/logOut";
import login from "../cypress/support/pageClass/login";

// Then create describe block
describe('TS', () => {
    // We have to create variables and then instantiate the classes
    const visit = new urltest(); 
    const testRegister = new register();
    const loginclick = new login();
    const logoutpage = new logOut();

    it('Accepted Positive Test Cases', () => {
        // Call methods from the instantiated classes to perform actions
        visit.visitURL(); // Visit the URL
        testRegister.rigetrationClick(); // Perform successful registration
        logoutpage.logout(); // Perform logout action
        loginclick.pagelogin(); // Perform a successful login
    });

    it('Register - Negative Test case with blank first name', () => {
        visit.visitURL(); // Visit the URL
        testRegister.Registrationclick3(); // Perform registration with a blank first name
    });

    it('Register - Negative Test case with blank last name', () => {
        visit.visitURL(); // Visit the URL
        testRegister.Registrationclick4(); // Perform registration with a blank last name
    });

    it('Register - Negative Test case with blank email', () => {
        visit.visitURL(); // Visit the URL
        testRegister.Registrationclick5(); // Perform registration with a blank email
    });

    it('Register - Negative Test case with password mismatch', () => {
        visit.visitURL(); // Visit the URL
        testRegister.Registrationclick2(); // Test password mismatch in registration
        testRegister.Registrationclick6(); // Test empty password with a password confirmation mismatch
    });

    it('Register - Negative Test case with unchecked privacy policy', () => {
        visit.visitURL(); // Visit the URL
        testRegister.Registrationclick7(); // Test registration with the privacy policy checkbox unchecked
    });

    it('Register - Negative Test case with unchecked privacy policy and invalid email', () => {
        visit.visitURL(); // Visit the URL
        testRegister.Registrationclick8(); // Test registration with an invalid email and unchecked privacy policy
    });
    // Test Case: Registration with an unchecked privacy policy checkbox (negative scenario)
    it('Register - Negative Test case by leaving checkbox unchecked', () => {
        visit.visitURL(); // Visit the specified URL
        testRegister.NT_RegisterPage9(); // Attempt registration without checking the checkbox
    });

    // Test Case: Registration with an empty form and checkbox checked (negative scenario)
    it('RegisterPage - Negative test case by leaving the form empty and checkbox checked', () => {
        visit.visitURL(); // Visit the specified URL
        testRegister.Registrationclick10(); // Attempt registration with empty fields and checkbox checked
    });

    // Test Case: Login with an invalid email format (missing '@gmail.com') and correct password (negative scenario)
    it('LoginPage - Invalid email without "@gmail.com" and correct Password', () => {
        visit.visitURL(); // Visit the specified URL
        loginclick.loginnegative(); // Attempt login with invalid email format and correct password
    });

    // Test Case: Login with a wrong email and correct password (negative scenario)
    it('LoginPage - Entering wrong Email and correct Password', () => {
        visit.visitURL(); // Visit the specified URL
        loginclick.loginnegative2(); // Attempt login with wrong email and correct password
    });

    // Test Case: Login with correct email but wrong password (negative scenario)
    it('LoginPage - Entering correct Email and wrong Password', () => {
        visit.visitURL(); // Visit the specified URL
        loginclick.loginnegative3(); // Attempt login with correct email and wrong password
    });

    // Test Case: Login with correct email but leaving the password field blank (negative scenario)
    it('LoginPage - Entering correct Email and leaving Password blank', () => {
        visit.visitURL(); // Visit the specified URL
        loginclick.loginnegative4(); // Attempt login with correct email but blank password
    });

    // Test Case: Login with correct password but leaving the email field blank (negative scenario)
    it('LoginPage - Entering correct Password and leaving Email blank', () => {
        visit.visitURL(); // Visit the specified URL
        loginclick.loginnegative5(); // Attempt login with blank email and correct password
    });
});