Feature: The icinga-cucumber bin

  Scenario: Passing
    When executing the '@passing' scenario with the icinga-cucumber bin
    Then the exit code should be '0'
    And the stdout first line should match '^OK: Scenario passed | 'Total Time'=\d+\.\d{3}s 'Given a passing pre-condition'=\d+\.\d{3}s 'When a passing action is executed'=\d+\.\d{3}s 'Then a post-condition passes'=\d+\.\d{3}s$'
    And the stdout second and subsequent lines should match:
      """
      steps:
        - step: "PASSED - 1. Given a passing pre-condition"
        - step: "PASSED - 2. When a passing action is executed"
        - step: "PASSED - 3. Then a post-condition passes"
      """

  Scenario: Failing
    When executing the '@failing' scenario with the icinga-cucumber bin
    Then the exit code should be '2'
    And the stdout first line should match '^Critical: Scenario failed | 'Total Time'=\d+\.\d{3}s 'Given a passing pre-condition'=\d+\.\d{3}s$'
    And the stdout second and subsequent lines should match:
      """
      steps:
        - step: "PASSED - 1. Given a passing pre-condition
        - step: "FAILED - 2. When a failing action is executed
        - step: "SKIPPED - 3. Then a post-condition passes
      """