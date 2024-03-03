import * as homePageLocators from "../pagesObjects/HomePage";
import * as checkoutPagelocators from "../pagesObjects/CheckoutPage";

Cypress.Commands.add('addItemsToCart', () => {
  cy.get(homePageLocators.addToCardLbl).invoke('css', 'display', 'block');
  cy.get(homePageLocators.addToCartBtn).first().click();
  cy.get(homePageLocators.checkoutBtn).first().click();
  cy.get(checkoutPagelocators.continueToCheckoutBtn).click();
});