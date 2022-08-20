Feature: update display message on typing

Scenario: display message is equal to text input value
Given that the text input box is empty
When I type inside de text input box
Then the display message should change to be equal to the text input value