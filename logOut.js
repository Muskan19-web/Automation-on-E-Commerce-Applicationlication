class logOut {
    logout() {
        // Click on "My Account" to open the dropdown
        cy.contains('My Account').click();

        // Select the "Logout" option from the dropdown
        cy.xpath('//*[@id="top-links"]/ul/li[2]/ul/li[5]/a').click();

        // After logging out, click on the "Continue" button to confirm and proceed
        cy.contains('Continue').click();
    }
}

export default logOut;
