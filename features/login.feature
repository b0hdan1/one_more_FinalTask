Feature: Smoke

  Scenario Outline: Change Currency on site
    Given I open the home page as a registered user
    When I click to currency button
    When I select '<currency>'
    Then I check correct '<currency>' on site

    Examples:
      | currency |
      | EUR      |

  Scenario: Successful visa submit
    Given I open home page
    When I click to 'visa' button
    When I fill 'from country' field
    When I fill 'to country' field
    When I fill 'date' field
    When I click 'submit' button
    When I correctly fill all require field on visa page
    Then I check current URL

