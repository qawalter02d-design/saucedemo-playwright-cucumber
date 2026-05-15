# Sauce Demo Automation Framework

Suite de pruebas automatizadas para la aplicación Sauce Demo utilizando Playwright con Cucumber y TypeScript.

## Objetivo

Automatizar flujos críticos de negocio de la aplicación Sauce Demo implementando buenas prácticas de automatización y el patrón de diseño Page Object Model.

## Tecnologías utilizadas

- Playwright
- Cucumber
- TypeScript
- Node.js

## Patrón de diseño implementado

Page Object Model (POM)

Este patrón permite separar la lógica de interacción con la interfaz de usuario de la lógica de validación de pruebas, facilitando el mantenimiento y escalabilidad del framework.

## Escenarios automatizados

### Login

- Login exitoso
- Login fallido

### Carrito

- Agregar producto al carrito

### Checkout

- Completar compra exitosamente

## Estructura del proyecto

```bash
saucedemo-playwright/
│
├── features/
├── pages/
├── step-definitions/
├── hooks/
├── utils/
├── package.json
├── tsconfig.json
├── cucumber.js
└── README.md
```

## Instalación

Clonar repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Instalar dependencias:

```bash
npm install
```

Instalar navegadores Playwright:

```bash
npx playwright install
```

## Ejecución de pruebas

Ejecutar toda la suite:

```bash
npx cucumber-js
```

## Resultados esperados

La ejecución debe mostrar:

```bash
4 scenarios (4 passed)
12 steps (12 passed)
```

## Autor

Walter