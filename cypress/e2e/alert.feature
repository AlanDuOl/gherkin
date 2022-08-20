Feature: show alert message on button click

Scenario: an alert message should be shown
Given that there is no alert message on the screen
When I click the alert button
Then an alert message should be shown