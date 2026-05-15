Feature: Login Sauce Demo

  Scenario: Login exitoso
    Given que estoy en la página de login
    When inicio sesión con usuario estándar
    Then debo visualizar la página de inventario


  Scenario: Login fallido
    Given que estoy en la página de login
    When inicio sesión con usuario bloqueado
    Then debo visualizar mensaje de error