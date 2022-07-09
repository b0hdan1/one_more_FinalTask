Feature: Smoke

  Scenario Outline: Change Currency on site
    Given I open the home page of the website
    When I click to currency button
    // And I select '<currency>'
    Then I check correct '<currency>' on site

    Examples:
      | currency |
      | EUR      |
