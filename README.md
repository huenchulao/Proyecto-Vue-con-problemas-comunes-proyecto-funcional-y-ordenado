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
