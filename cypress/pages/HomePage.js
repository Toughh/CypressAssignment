import * as homePageLocators from "../pagesObjects/HomePage";

Cypress.Commands.add('validateIfacademyBugsExist', () => {
  cy.get(homePageLocators.academybugsLnk);
});