# Informe de Estrategia de Automatización

## 1. Enfoque de Automatización

Se implementó una suite de pruebas automatizadas orientada a validar los flujos críticos de negocio de la aplicación Sauce Demo.

Los escenarios automatizados fueron seleccionados en función de su relevancia funcional:

- Autenticación exitosa
- Validación de autenticación fallida
- Gestión de carrito de compras
- Flujo completo de checkout

Estos escenarios permiten cubrir funcionalidades esenciales de la aplicación.

---

## 2. Framework Seleccionado

### Playwright

Se seleccionó Playwright por las siguientes ventajas:

- Alta velocidad de ejecución
- Soporte multiplataforma
- Esperas automáticas
- Mayor estabilidad frente a Selenium en interfaces dinámicas

---

### Cucumber

Se utilizó Cucumber para implementar pruebas bajo enfoque BDD (Behavior Driven Development).

Beneficios:

- Escenarios legibles
- Fácil comprensión funcional
- Mejor comunicación entre negocio y QA

---

## 3. Patrón de Diseño Implementado

## Page Object Model (POM)

Se implementó el patrón Page Object Model para encapsular las acciones e interacciones de cada página.

### Páginas implementadas

- LoginPage
- InventoryPage
- CheckoutPage

### Beneficios obtenidos

- Reutilización de código
- Mejor mantenibilidad
- Separación de responsabilidades
- Escalabilidad del framework

---

## 4. Estrategia de Validación

Las validaciones se implementaron mediante assertions utilizando Playwright.

Ejemplos:

- Validación de URL después del login
- Validación de contador de carrito
- Validación de mensaje final de compra

---

## 5. Buenas Prácticas Aplicadas

Durante la implementación se aplicaron las siguientes buenas prácticas:

- Separación entre features y steps
- Uso de selectores robustos
- Evitar esperas estáticas
- Independencia entre escenarios
- Código modular y reutilizable

---

## 6. Conclusión

La solución desarrollada cumple con los requisitos planteados, proporcionando una suite automatizada escalable, mantenible y alineada con estándares profesionales de automatización QA.