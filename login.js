class login {

    // This method handles the positive login scenario with valid credentials.
    pagelogin() {
        // Wait for 2 seconds before performing actions (optional, can be removed if not needed).
        cy.wait(2000);

        // Open the dropdown menu and click on 'Login'.
        cy.get('.caret').click();
        cy.contains('Login').click();

        // Enter valid email and password for the login process.
        cy.get('#input-email').type('khushipate34@gmail.com');
        cy.get('#input-password').type('Admin12');

        // Click the login button.
        cy.get('[value="Login"]').click();

        // After successful login, click 'Continue' to proceed further.
        cy.contains('Continue').click();
    }

    // This method tests the negative login scenario with an invalid email format.
    loginnegative() {
        // Open the dropdown menu and click on 'Login'.
        cy.get('.caret').click();
        cy.contains('Login').click();

        // Enter an invalid email format and a password.
        cy.get('[placeholder="E-Mail Address"]').type('Muskan');
        cy.get('[placeholder="Password"]').type('Lazy123');

        // Submit the login form.
        cy.get('input[type="submit"]').click();

        // Verify that the error message is displayed.
        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible')
        .should('have.text', 'Warning: No match for E-Mail Address and/or Password.');
    }

    // This method tests the negative login scenario with a valid email but incorrect password.
    loginnegative2() {
        // Open the dropdown menu and click on 'Login'.
        cy.get('.caret').click();
        cy.contains('Login').click();

        // Enter a valid email but an incorrect password.
        cy.get('[placeholder="E-Mail Address"]').type('muskan@gmail.com');
        cy.get('[placeholder="Password"]').type('Lazy123');

        // Submit the login form.
        cy.get('input[type="submit"]').click();

        // Verify that the error message is displayed.
        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible')
        .should('have.text', 'Warning: No match for E-Mail Address and/or Password.');
    }

    // This method tests the negative login scenario with both an invalid email and password.
    loginnegative3() {
        // Open the dropdown menu and click on 'Login'.
        cy.get('.caret').click();
        cy.contains('Login').click();

        // Enter an invalid email and password.
        cy.get('[placeholder="E-Mail Address"]').type('patelkhushi2000@gmail.com');
        cy.get('[placeholder="Password"]').type('patel125134');

        // Submit the login form.
        cy.get('input[type="submit"]').click();

        // Verify that the error message is displayed.
        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text', 'Warning: No match for E-Mail Address and/or Password.');
    }

    // This method tests the negative login scenario where the email is invalid and the password is left empty.
    loginnegative4() {
        // Open the dropdown menu and click on 'Login'.
        cy.get('.caret').click();
        cy.contains('Login').click();

        // Enter an invalid email and leave the password field empty.
        cy.get('[placeholder="E-Mail Address"]').type('patelmuskan200@gmail.com');
        cy.get('[placeholder="Password"]').type('{selectall}{backspace} ');

        // Submit the login form.
        cy.get('input[type="submit"]').click();

        // Verify that the error message is displayed.
        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible')
        .should('have.text', 'Warning: No match for E-Mail Address and/or Password.');
    }

    // This method tests the negative login scenario where the email is left empty and a password is entered.
    loginnegative5() {
        // Open the dropdown menu and click on 'Login'.
        cy.get('.caret').click();
        cy.contains('Login').click();

        // Leave the email field empty and enter a password.
        cy.get('[placeholder="E-Mail Address"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Password"]').type('xyz123');

        // Submit the login form.
        cy.get('input[type="submit"]').click();

        // Verify that the error message is displayed.
        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible')
        .should('have.text', 'Warning: No match for E-Mail Address and/or Password.');
    }
}

export default login;

