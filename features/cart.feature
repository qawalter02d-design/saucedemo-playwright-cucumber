Feature: Carrito de compras

  Scenario: Agregar producto al carrito
    Given que inicio sesión con credenciales válidas
    When agrego un producto al carrito
    Then debo visualizar un producto en el carrito