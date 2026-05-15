Feature: Checkout

  Scenario: Completar compra exitosamente
    Given que inicio sesión y agrego un producto
    When completo el proceso de checkout
    Then debo visualizar mensaje de compra exitosa