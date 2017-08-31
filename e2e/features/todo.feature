Feature: Add TODO
  Add a todo and check it exists

Scenario: Adding a todo at the end
  Given I have entered a new "todoname"
  When I press the add button
  Then I should see a new item at the end
