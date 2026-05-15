Feature: Login Sauce Demo

  Scenario: Login exitoso
    Given que estoy en la página de login
    When ingreso usuario "standard_user" y contraseña "secret_sauce"
    Then debo visualizar la página de inventario


    Scenario: Login fallido
    Given que estoy en la página de login
    When ingreso usuario "usuario_invalido" y contraseña "12345"
    Then debo visualizar mensaje de error