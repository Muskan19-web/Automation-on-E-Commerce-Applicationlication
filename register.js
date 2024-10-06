class register {

    rigetrationClick() {
        // First, we click on the "My Account" dropdown
        cy.xpath('//*[@id="top-links"]/ul/li[2]').click({force:true})

        // After opening the dropdown, we click on "Register"
        cy.xpath('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a').click({force:true})

        // Fill in the registration form with valid details
        cy.get('#input-firstname').type('Muskan');
        cy.get('#input-lastname').type('patel');
        cy.get('#input-email').type('anshulkhushi232@gmail.com');
        cy.get('#input-telephone').type('6267021603');
        cy.get('#input-password').type('admin123');
        cy.get('#input-confirm').type('admin123');

        // Agree to terms and conditions
        cy.get('[name="agree"]').check().should('be.checked');

        // Click the "Continue" button to complete registration
        cy.get('[value="Continue"]').click();

        // Verify the registration process by checking the next element, such as the Continue button
        cy.get('.pull-right > .btn');
    }

    Registrationclick2() {
        // Click on "My Account" and then "Register"
        cy.xpath('//*[@id="top-links"]/ul/li[2]').click({force:true});
        cy.xpath('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a').click({force:true});

        // Fill in the registration form with mismatched passwords
        cy.get('#input-firstname').type('muskan');
        cy.get('#input-lastname').type('patel');
        cy.get('#input-email').type('khushipatel123@gmail.com');
        cy.get('#input-telephone').type('1249848309');
        cy.get('#input-password').type('admin123');
        cy.get('#input-confirm').type('{selectall}{backspace} ');  // Mismatching password

        // Subscribe to the newsletter and agree to terms
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();

        // Submit the form
        cy.get('input[type="submit"]').click();

        // Validate that the error message for password mismatch is displayed
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text', 'Password confirmation does not match password!');
        cy.screenshot();
    }

    Registrationclick3() {
        // Attempt to register without filling in the "First Name" field
        cy.xpath('//*[@id="top-links"]/ul/li[2]').click({force:true});
        cy.xpath('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a').click({force:true});

        // Fill in all fields except the first name
        cy.get('[placeholder="First Name"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Last Name"]').type('patel');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('muskan123');
        cy.get('[placeholder="Password Confirm"]').type('muskan123');

        // Subscribe to the newsletter and agree to terms
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();

        // Submit the form and verify the error for missing first name
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text', 'First Name must be between 1 and 32 characters!');
        cy.screenshot();
    }

    Registrationclick4() {
        // Attempt to register without filling in the "Last Name" field
        cy.xpath('//*[@id="top-links"]/ul/li[2]').click({force:true});
        cy.xpath('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a').click({force:true});

        // Fill in all fields except the last name
        cy.get('#input-firstname').type('muskan');
        cy.get('[placeholder="Last Name"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('muskan123');
        cy.get('[placeholder="Password Confirm"]').type('muskan123');

        // Subscribe to the newsletter and agree to terms
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();

        // Submit the form and verify the error for missing last name
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text', 'Last Name must be between 1 and 32 characters!');
    }

    Registrationclick5() {
        // Attempt to register with an invalid email address
        cy.xpath('//*[@id="top-links"]/ul/li[2]').click({force:true});
        cy.xpath('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a').click({force:true});

        // Fill in the form with an invalid email
        cy.get('[placeholder="First Name"]').type('muskan');
        cy.get('[placeholder="Last Name"]').type('patel');
        cy.get('[placeholder="E-Mail"]').type('    ');  // Invalid email
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('muskan123');
        cy.get('[placeholder="Password Confirm"]').type('muskan123');

        // Subscribe to the newsletter and agree to terms
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();

        // Submit the form and verify the error for invalid email address
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text', 'E-Mail Address does not appear to be valid!');
        cy.screenshot();
    }

    Registrationclick6() {
        // Attempt to register with mismatched passwords
        cy.xpath('//*[@id="top-links"]/ul/li[2]').click({force:true});
        cy.xpath('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a').click({force:true});

        // Fill in the form with valid details except mismatched passwords
        cy.get('[placeholder="First Name"]').type('muskan');
        cy.get('[placeholder="Last Name"]').type('patel');
        cy.get('[placeholder="E-Mail"]').type('bsfjdkhjijertjsigdsug@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('{selectall}{backspace}      ');  // Empty password field
        cy.get('[placeholder="Password Confirm"]').type('abc234'); // Mismatching password

        // Subscribe to the newsletter and agree to terms
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();

        // Submit the form and verify the error for password mismatch
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text', 'Password confirmation does not match password!');
        cy.screenshot();
        }

    Registrationclick7() {
        // Attempt to register without agreeing to the Privacy Policy
        cy.xpath('//*[@id="top-links"]/ul/li[2]').click({force:true});
        cy.xpath('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a').click({force:true});

        // Fill in the form with valid details but don't check the privacy policy agreement
        cy.get('[placeholder="First Name"]').type('muskan');
        cy.get('[placeholder="Last Name"]').type('patel');
        cy.get('[placeholder="E-Mail"]').type('jsbdbjasdbsbjbsf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('muskan123');
        cy.get('[placeholder="Password Confirm"]').type('{selectall}{backspace}      ');

        // Uncheck the privacy policy
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').uncheck();

        // Submit the form and verify the warning message for privacy policy
        cy.get('input[type="submit"]').click();
        cy.get('[class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text', 'Warning: You must agree to the Privacy Policy!');
        cy.screenshot();
    }

    Registrationclick8() {
        // Attempt to register with both invalid email and without agreeing to the Privacy Policy
        cy.xpath('//*[@id="top-links"]/ul/li[2]').click({force:true});
        cy.xpath('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a').click({force:true});

        // Fill in the form with valid details but invalid email and privacy policy unchecked
        cy.get('[placeholder="First Name"]').type('muskan');
        cy.get('[placeholder="Last Name"]').type('patel');
        cy.get('[placeholder="E-Mail"]').type('bdughkljreiuhghljrdh@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('muskan123');
        cy.get('[placeholder="Password Confirm"]').type('muskan123');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('input[type="submit"]').click();

        cy.get('[class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: You must agree to the Privacy Policy!');
        cy.screenshot();    
    }
        NT_RegisterPage9(){
            cy.xpath('//*[@id="top-links"]/ul/li[2]').click({force:true});
            cy.xpath('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a').click({force:true});
            cy.get('[placeholder="First Name"]').type('muskan');
            cy.get('[placeholder="Last Name"]').type('patel');
            cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbvhcgkfbf@gmail.com');
            cy.get('[placeholder="Telephone"]').type('7378351383');
            cy.get('[placeholder="Password"]').type('kunal123');
            cy.get('[placeholder="Password Confirm"]').type('kunal123');
            cy.get('[name="newsletter"][value="1"]').click();
            cy.get('input[type="checkbox"]').uncheck();
            cy.get('input[type="submit"]').click();
    
           // cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');
            cy.get('[class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: You must agree to the Privacy Policy!');
            cy.screenshot();
        }
        Registrationclick10(){
            cy.xpath('//*[@id="top-links"]/ul/li[2]').click({force:true});
            cy.xpath('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a').click({force:true});
            cy.get('[placeholder="First Name"]').type('{selectall}{backspace} ');
            cy.get('[placeholder="Last Name"]').type('{selectall}{backspace} ');
            cy.get('[placeholder="E-Mail"]').type('{selectall}{backspace} ');
            cy.get('[placeholder="Telephone"]').type('{selectall}{backspace}     ');
            cy.get('[placeholder="Password"]').type('{selectall}{backspace} ');
            cy.get('[placeholder="Password Confirm"]').type('{selectall}{backspace}     ');
            cy.get('[name="newsletter"][value="1"]').click();
            cy.get('input[type="checkbox"]').uncheck();
            cy.get('input[type="submit"]').click();
    
            cy.xpath('(//div[@class="text-danger"])[1]').should('be.visible').should('have.text','First Name must be between 1 and 32 characters!');
            cy.xpath('(//div[@class="text-danger"])[2]').should('be.visible').should('have.text','Last Name must be between 1 and 32 characters!');
            cy.xpath('(//div[@class="text-danger"])[3]').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');
            cy.xpath('(//div[@class="text-danger"])[4]').should('be.visible').should('have.text','Password must be between 4 and 20 characters!');
            cy.xpath('(//div[@class="text-danger"])[5]').should('be.visible').should('have.text','Password confirmation does not match password!');
    
            cy.get('[class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: You must agree to the Privacy Policy!');
            cy.screenshot();
        }   
    
    
    }
export default register;

