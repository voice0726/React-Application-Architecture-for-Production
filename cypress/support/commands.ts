// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

Cypress.Commands.add('login', (user: { email: string; password: string }) => {
  cy.session(
    user.email,
    () => {
      cy.visit('http://localhost:3000/dashboard/jobs');
      cy.wait(500);
      cy.url().should('equal', 'http://localhost:3000/auth/login?redirect=/dashboard/jobs');
      cy.findByRole('textbox', {
        name: /email/i,
      }).type(user.email);
      cy.findByLabelText(/password/i).type(user.password.toLowerCase());
      cy.findByRole('button', {
        name: /log in/i,
      }).click();
      cy.wait(500);
    },
    {
      validate() {
        cy.visit('http://localhost:3000/dashboard/jobs');
        cy.findByRole('heading', {
          name: /jobs/i,
        }).should('exist');
      },
    },
  );
});
