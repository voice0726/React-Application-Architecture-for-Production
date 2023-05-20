// cypress/support/index.ts
// <reference types="cypress" />

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      login(value: { email: string; password: string }): Chainable;
    }
  }
}
