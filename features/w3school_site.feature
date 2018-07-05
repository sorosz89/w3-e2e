Feature: w3school site tests
As a user
I want to visit the w3school site in different layouts
So that I can see the application on multiple resolutions

@desktop
  Scenario Outline: Desktop_1 - Searching on w3school
   Given the w3school site is loaded
   When the Search button is clicked
   Then the Search bar should be displayed

    When the "<search_term>" term is typed into the Search bar
    And the Search button is clicked on the page
    Then the SRL popup should be displayed

    When the X button of the SRL popup is clicked
    Then the SRL popup should be hidden
    And the "<placeholder_text>" should be displayed in the Search bar
    And the w3school logo should be displayed

    When the "<title>" item is clicked on the bar block
    Then the "<tutorial>" should match the opened page

    When the Next button is clicked
    Then the URL should contain the "<parameter>"
    And the Home button is displayed

    When the Home button is clicked
    Then the home page URL should contain the "<parameter_2>"

    Examples:
    | search_term            |  title             | tutorial| placeholder_text  | parameter | parameter_2 |
    | responsive web design  |  Learn JavaScript |  JavaScript Tutorial |Custom Search| js_intro | default |
    | html  ||||||
   
  @phone
  Scenario Outline: Phone_1 - Searching on w3school
    Given the w3school site is loaded
    When the Search button is clicked
    Then the Search bar should be displayed

    When the "<search_term>" term is typed into the Search bar
    And the Search button is clicked on the page
    Then the SRL popup should be displayed

    When the X button of the SRL popup is clicked
    Then the SRL popup should be hidden
    And the "<placeholder_text>" should be displayed in the Search bar
    And the w3school logo should be displayed on phone layout
    And the Hamburger menu should be displayed

    When the Hamburger menu is clicked
    And the "Tutorial" button is clicked
    And the "<title>" item is clicked on hamburger menu
    Then the "<tutorial>" should match the opened page

    When the Next button is clicked
    Then the URL should contain the "<parameter>"
    And the Home button is displayed

    And the Home button is clicked

    Examples:
    | search_term | placeholder_text | tutorial | title |  parameter |
    | responsive web design|  Custom Search | JavaScript Tutorial |Learn JavaScript | js_intro |