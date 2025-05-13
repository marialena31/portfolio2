/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to get a project card by title
Cypress.Commands.add('getProjectByTitle', (title: string) => {
  return cy.findByRole('article').filter(`:contains("${title}")`);
});

// Custom command to check if navigation links are working
Cypress.Commands.add('checkNavigationLink', (linkText: string, expectedPath: string) => {
  cy.findByRole('link', { name: linkText }).should('be.visible').click();
  cy.url().should('include', expectedPath);
});

export interface Chainable {
  getProjectByTitle(title: string): Cypress.Chainable<JQuery<HTMLElement>>;
  checkNavigationLink(linkText: string, expectedPath: string): void;
}
