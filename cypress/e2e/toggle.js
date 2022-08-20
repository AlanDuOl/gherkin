import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("that the background color is light", () => {
  cy.visit("/");
  const light = 'rgb(222, 222, 222)';
  cy.get("#background").should('have.css', 'background-color', light);
});

When("I click the button to change the color to dark", () => {
  cy.get("#toggle-bg").click();
});

Then("the background color changes to dark", () => {
  const dark = 'rgb(111, 111, 111)';
  cy.get("#background").should('have.css', 'background-color', dark);
});

Given("that the background color is dark", () => {
  cy.visit("/");
  const dark = 'rgb(111, 111, 111)';
  cy.get("#toggle-bg").click();
  cy.get("#background").should('have.css', 'background-color', dark);
});

When("I click the button to change the color to light", () => {
  cy.get("#toggle-bg").click();
});

Then("the background color changes to light", () => {
  const light = 'rgb(222, 222, 222)';
  cy.get("#background").should('have.css', 'background-color', light);
});