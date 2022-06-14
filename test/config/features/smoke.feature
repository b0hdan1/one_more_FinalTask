Feature: Smoke

  Scenario Outline: Change currency on site
    Given I open 'https://www.phptravels.net' page
    When I click to currency button
    And I select '<currency>'
    Then I check correct '<currency>' on site

    Examples:
      | currency |
      | EUR      |

  Scenario: Successful visa submit
    Given I open https://www.phptravels.net/
    When I click to 'visa' button
    And I fill 'from country' field
    And I fill 'to country' field
    And I fill 'date' field
    And I click 'submit' button
    And I correctly fill all require field on page 'https://www.phptravels.net/visa/submit/bo/af/24-06-2022'
    Then I check 'https://www.phptravels.net/success/visa' URL

  Scenario: Check successful SignUp
    Given I open https://www.phptravels.net/
    When I click to 'Signup' button
    And I correct fill all required fields
    Then I check a successful message

  Scenario: Check URL after successful LogIn
    Given I open https://www.phptravels.net/
    When I click to 'LogIn button'
    And I correct fill all required fields
    Then I check 'https://www.phptravels.net/account/dashboard' URL

  Scenario: Successful hotel booking
    Given I at 'https://www.phptravels.net/account/dashboard' page
    And I click on 'Hotels' button
    And I select 'second' Hotel in page
    And I click 'Book now' button
    And I click 'Term and Conditions' checkbox
    And I click 'Confirm' button
    Then I check successful booking message

  Scenario: Check correct Hotels URL
    Given I at 'https://www.phptravels.net/account/dashboard'
    When I click on 'Hotels' button
    Then I check https://www.phptravels.net/hotels URL

  Scenario Outline: Successful Flights booking
    Given I at 'https://www.phptravels.net/account/dashboard' page
    When I click to 'Flights' button
    And I click 'One way' label
    And I select 'Economy' flight type
    And I fill '<Flying From>' field
    And I fill '<Destination>' field
    And I fill '<Departure Date>' field
    And  I select '<Passengers Count>' passenger
    And I click 'Search' button
    Then I check 'https://www.phptravels.net/flights/en/usd/dub/bud/oneway/economy/'<Departure Date>'/'<Passengers Count>' URL

    Examples:
      | Flying From   | Destination   | Departure Date| Passengers Count |
      | Dublin        | Budapest      | 27-06-2022    | 1                |

  Scenario: Check correct Visa URL
    Given I at 'https://www.phptravels.net/account/dashboard'
    And I check 'Visa' button visibility
    When I click to 'Visa' button
    Then I check 'https://www.phptravels.net/visa' URL
