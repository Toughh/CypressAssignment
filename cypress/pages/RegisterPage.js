import Chance from 'chance';
import * as homePageLocators from "../pagesObjects/HomePage";
import * as loginPagelocators from "../pagesObjects/LoginPage";
import * as registerPagelocators from "../pagesObjects/RegisterPage";

Cypress.Commands.add('register', () => {
  const chance = new Chance();
  const firstName = chance.first();
  const lastName = chance.last();
  const email = chance.email();
  const password = chance.string({ length: 8, symbols: true });

  cy.get(homePageLocators.addToCardLbl).invoke('css', 'display', 'block');
  cy.get(homePageLocators.loginForPricingBtn).first().click();
  cy.get(loginPagelocators.createAccountBtn).click();
  cy.get(registerPagelocators.firstNameTxt).type(firstName);
  cy.get(registerPagelocators.lastNameTxt).type(lastName);
  cy.get(registerPagelocators.emailTxt).type(email);
  cy.get(registerPagelocators.retypeEmailTxt).type(email);
  cy.get(registerPagelocators.passwordTxt).type(password);
  cy.get(registerPagelocators.retypePasswordTxt).type(password);
  cy.get(registerPagelocators.subscribeCbk).click();
  cy.get(registerPagelocators.registerBtn).click();
});