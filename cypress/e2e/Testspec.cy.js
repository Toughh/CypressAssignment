import '../support/commands';
import '../pages/RegisterPage';
import '../pages/CheckoutPage';
import '../pages/HomePage';
const addContext = require('mochawesome/addContext');

describe('Academy Bugs Website Test Case', () => {
  beforeEach('navigate to academybugs.com page',()=>{
    cy.loadConfig().then((config) => {
      const baseUrl = config.baseUrl;
      cy.toURL(baseUrl);
    });
  })
  Cypress.on('test:after:run', (test, runnable) => {
      if (test.state === 'failed') {
          const screenshot = `screenshots/${Cypress.spec.name
          }/${runnable.parent.title} -- ${test.title} (failed).png`;
          addContext({ test }, "/cypress/reports/" + screenshot);
      }
  });
  it('TC001_To verify if homepage contains academybugs.com link title', () => {
    cy.validateIfacademyBugsExist().should('exist');
  })

  /* This test has been failed intentionally to show negative test
    Failed screenshort will be able to view in the report with assertion 
    error */
  it('TC002_To verify if user able to register in the application', () => {
    cy.register();
    cy.url().should('include', '?ec_page=registered');
  })

  it('TC003_To verify if user able to land into checkout page after adding seelected item to the shopping cart', () => {
    cy.addItemsToCart();
    cy.url().should('include', '?ec_page=checkout_info');
  })
})