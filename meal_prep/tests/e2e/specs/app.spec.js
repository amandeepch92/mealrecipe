// https://docs.cypress.io/api/introduction/api.html

describe('Meal-Recipe', () => {
    it('Visits the app root url', () => {
      cy.visit('/');
    });
  
    it('Visits the app about url', () => {
      cy.wait(1500);
      cy.visit('/dashboard');
    });
  
    it('Visits the app employees url', () => {
      cy.wait(1500);
      cy.visit('/categories');
    });
  
    it('loads 3 nav-link items', () => {
      cy.get('a').should('have.length', 3);
    });
  
    it('loads 1 router-link-active items', () => {
      cy.get('.router-link-active').should('have.length', 1);
    });
  });
  