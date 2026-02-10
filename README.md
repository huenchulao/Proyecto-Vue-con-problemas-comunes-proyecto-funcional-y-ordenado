# Vue Fix Example

Ejemplo técnico rápido: **“Proyecto Vue con problemas comunes → proyecto funcional y ordenado”**.

## Objetivo
Que cualquier persona pueda ver este código y entender que se resolvieron problemas típicos de proyectos Vue reales.

## Antes → Después (5 puntos)
1. **Componentes muy grandes** → Se dividió en `ProductList` y `ProductCard` con responsabilidades claras.
2. **Lógica duplicada** → La carga de datos vive en un solo lugar (`ProductList`).
3. **Datos quemados en la vista** → Se movieron a un servicio aislado (`services/api.js`).
4. **Mala comunicación entre componentes** → Se usa flujo limpio de `props` (entrada) y `emits` (salida).
5. **Rutas mal armadas** → Se define una ruta base simple y mantenible en `router/index.js`.

## Qué se corrigió
- Separación de responsabilidades.
- Uso correcto de props y emits.
- Limpieza de lógica en componentes.
- Mejor estructura de carpetas.

## Qué funciona
- Lista de productos simulada.
- Consumo de API falsa (mock con promesa).
- Navegación básica con Vue Router.

## Cómo verlo y ejecutarlo en Visual Studio Code
1. Abre la carpeta del proyecto en VS Code.
2. Abre la terminal integrada (`Ctrl + ñ` o `Terminal > New Terminal`).
3. Instala dependencias:
   ```bash
   npm install
   ```
4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre en navegador la URL que muestra Vite (normalmente `http://localhost:5173`).

### Comandos útiles
- Build de producción:
  ```bash
  npm run build
  ```
- Vista previa del build:
  ```bash
  npm run preview
  ```


## Arranque en 1 comando (VS Code Task)
También puedes usar la tarea integrada de VS Code:

1. `Ctrl + Shift + P`
2. Ejecuta `Tasks: Run Task`
3. Selecciona `Start project (install + dev)`

Esta tarea ejecuta `npm run start:dev` (instala dependencias y luego levanta Vite).

## Mensaje listo para enviar a cliente
Puedes copiar el texto de `QUICK_MESSAGE_CLIENT.md`.


## Nota importante para PowerShell (tu error)
`Run dev server` **no es un comando de terminal**. Es el nombre de una tarea de VS Code.

Por eso te salió:
- `Run: The term 'Run' is not recognized...`

### Correcto
- Opción A (terminal):
  ```bash
  npm run start:dev
  ```
- Opción B (VS Code):
  `Ctrl + Shift + P` → `Tasks: Run Task` → `Start project (install + dev)`

## Si `npm install` falla en Windows
Prueba en este orden:

1. Ver versiones:
   ```bash
   node -v
   npm -v
   ```
2. Limpiar cache:
   ```bash
   npm cache clean --force
   ```
3. Forzar registro público:
   ```bash
   npm config set registry https://registry.npmjs.org/
   ```
4. Reintentar:
   ```bash
   npm install
   npm run dev
   ```
