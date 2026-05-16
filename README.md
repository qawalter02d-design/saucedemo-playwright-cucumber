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

## Estrategia de automatización

La estrategia de automatización se basa en los siguientes principios:

**Enfoque BDD (Behavior Driven Development)**
Se utilizó Cucumber con Gherkin para escribir los escenarios en lenguaje natural, permitiendo que tanto el equipo técnico como el negocio puedan entender las pruebas sin necesidad de conocer el código.

**Patrón Page Object Model (POM)**
Cada página de la aplicación tiene su propia clase en la carpeta `pages/`. Esto permite:
- Reutilizar el código de interacción con la UI en múltiples tests
- Centralizar los selectores en un solo lugar
- Facilitar el mantenimiento cuando la UI cambia

**Separación de responsabilidades**
- `features/` — define el comportamiento esperado en Gherkin
- `step-definitions/` — conecta los pasos Gherkin con el código
- `pages/` — encapsula la interacción con cada página
- `utils/` — centraliza datos compartidos como credenciales

**Gestión de credenciales**
Las credenciales se centralizan en `utils/credentials.ts` para evitar datos hardcodeados en los tests y facilitar su mantenimiento.

**Integración continua**
Se configuró un pipeline con GitHub Actions que ejecuta automáticamente toda la suite de pruebas en cada push o pull request a la rama `main`, garantizando que ningún cambio rompa la funcionalidad existente.

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

Ing: Walter Enrique Diaz Castillo