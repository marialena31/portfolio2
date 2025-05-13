describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the correct title and metadata', () => {
    cy.title().should('exist');
    cy.get('meta[name="description"]').should('exist');
  });

  it('should display and navigate through the menu', () => {
    cy.get('nav').should('be.visible');

    // Check main navigation items
    cy.get('[role="menuitem"]').contains('Accueil').should('be.visible');
    cy.get('[role="menuitem"]').contains('À propos').should('be.visible');
    cy.get('[role="menuitem"]').contains('Services').should('be.visible');
    cy.get('[role="menuitem"]').contains('Portfolio').should('be.visible');
    cy.get('[role="menuitem"]').contains('Blog').should('be.visible');
    cy.get('[role="menuitem"]').contains('Contact').should('be.visible');

    // Test navigation
    cy.get('[role="menuitem"][href="/portfolio/"]').click();
    cy.url().should('include', '/portfolio');
    cy.go('back');

    cy.get('[role="menuitem"][href="/about/"]').click();
    cy.url().should('include', '/about');
  });

  it('should have a working logo link', () => {
    cy.get('a[aria-label="Go to homepage"]').should('be.visible').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  // Update or remove this test if you don't have project cards on the home page
  it('should display blog posts or articles', () => {
    cy.get('.blog-module--post--0206a').should('have.length.at.least', 1);

    // Check blog post structure
    cy.get('.blog-module--post--0206a')
      .first()
      .within(() => {
        cy.get('.blog-module--postTitle--1e0dd').should('exist');
        cy.get('.blog-module--excerpt--2e1e5').should('exist');
        cy.get('.blog-module--readMore--65925').should('exist');
      });
  });
});
