Feature: toggle background color on button click

Scenario: change background color to dark
Given that the background color is light
When I click the button to change the color to dark
Then the background color changes to dark

Scenario: change background color to light
Given that the background color is dark
When I click the button to change the color to light
Then the background color changes to light