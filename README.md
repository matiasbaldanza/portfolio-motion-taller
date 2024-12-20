# Portfolio personal usando Motion

Portfolio personal implementado con Next.js (App Router) sin animaciones, recreado a partir de un diseño hecho en un tutorial de [@ByteGrad](https://youtube.com/@ByteGrad).

Tutorial original: [https://youtu.be/sUKptmUVIBM?si=aHloUppvrL-v9uSN](https://youtu.be/sUKptmUVIBM?si=aHloUppvrL-v9uSN)

El tutorial fue recreado desde cero a partir del resultado final del tutorial original (algunas cosas están implementadas de forma distinta) y se extendió agregando un theme switcher de tres estados.

## Pendientes
- [ ] TODO: (Experiencia) Agregar un selector para ordenar por fecha en ambos sentidos
- [ ] TODO: (Experiencia) Agregar un filtro para seleccionar experiencia por tecnologías/skills
- [ ] TODO: (Contacto) Implementar envío de correo con server actions y alguna lib de email
- [ ] TODO: (Proyectos) Agregar proyectos reales de ejemplo

No tiene implementadas animaciones con Motion (ex Framer Motion).
Las animaciones están implementadas en una rama llamada `animations-finished`.

## Tecnologías usadas

- Next.js (App Router)
- Tailwind CSS
- Context API
- React Icons
- Framer Motion

## NOTA

- La funcionalidad instalada (sitio sin animar) está implementada en la rama 'main'.
- Las animaciones están implementadas en la rama 'animations-finished'.
- Las animaciones hechas en el taller están implementadas en la rama 'animations-taller'

## Instalación

Clonar el repositorio y luego instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```
