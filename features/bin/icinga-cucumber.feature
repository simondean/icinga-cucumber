Feature: The icinga-cucumber bin

  Scenario: Passing
    When executing the '@passing' scenario with the icinga-cucumber bin
    Then the exit code should be '0'
    And the stdout first line should match '^OK: Scenario passed | 'Total duration'=\d+\.\d{3}s 'Step 1 - Given a passing pre-condition'=\d+\.\d{3}s 'Step 2 - When a passing action is executed'=\d+\.\d{3}s 'Step 3 - Then a post-condition passes'=\d+\.\d{3}s$'
    And the stdout second and subsequent lines should match:
      """
      Steps:
        - Step 1: Given a passing pre-condition
        - Step 2: When a passing action is executed
        - Step 3: Then a post-condition passes
      """