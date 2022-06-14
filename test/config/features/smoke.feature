Feature: Smoke

  Scenario: Check visibility of required fields for SignUp
    Given I open 'https://www.phptravels.net' page
    When I check 'SignUp' button visibility
    Then I click 'SignUp' button
    And I check 'First name' field is visible
    And I check 'Last name' field is visible
    And I check 'Phone' field is visible
    And I check 'Email address' field is visible
    And I check 'Password' field is visible
    And I check 'Account type' field is visible

  Scenario: Check successful SignUp
    Given I open https://www.phptravels.net/
    When I click to "Signup button"
    And I correct fill all required fields
    Then I saw a successful message

  Scenario: Check visibility of required fields for LogIn
    Given I open 'https://www.phptravels.net' page
    When I check 'LogIn' button visibility
    Then I click 'LogIn' button
    And I check 'Email address' field is visible
    And I check 'Password' field is visible
    And I check checkbox 'Remember me' field is visible

  Scenario: Check URL after successful LogIn
    Given I open https://www.phptravels.net/
    When I click to "LogIn button"
    And I correct fill all required fields
    Then I saw 'https://www.phptravels.net/account/dashboard' URL

  Scenario: Successful hotel booking
    Given I at 'https://www.phptravels.net/account/dashboard' page
    When I check 'Hotels' button visibility
    And I click on 'Hotels' button
    And I select 'second' Hotel in page
    And I check 'Book now' button visibility
    And I click 'Book now' button
    And I check 'Term and Conditions' checkbox visibility
    And I click 'Term and Conditions' checkbox
    And I check 'Confirm' button visibility
    And I click 'Confirm' button
    Then I check successful booking message

  Scenario: Successful hotel booking
    Given I at 'https://www.phptravels.net/account/dashboard' page
    When I check 'Flights' button visibility
    And I click to 'Flights' button
    And I check 'One way' label visibility
    And I click 'One way' label
    And I check 'Economy' flight type visibility
    And I select 'Economy' flight type
    And I check 'Flying From' field visibility
    And I fill 'Flying From' field
    And I check 'To Destination' field visibility
    And I fill 'To Destination' field
    And I check 'Search' button visibility
    And I click 'Search' button visibility
    Then I check correct URL

    Scenario: Check correct Cars URL
      Given I at 'https://www.phptravels.net/account/dashboard'
      And I check 'Cars' button visibility
      When I click on 'Cars' button
      Then I Check correct URL

  Scenario: Check correct Visa URL
    Given I at 'https://www.phptravels.net/account/dashboard'
    And I check 'Visa' button visibility
    When I click to 'Visa' button
    Then I Check correct URL
