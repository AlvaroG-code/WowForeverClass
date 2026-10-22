# Elige tu destino — Clases y razas de WoW: Forever

> Guía visual en español para elegir clase y raza en **World of Warcraft: Forever**.

**[Ver la guía en vivo](https://alvarog-code.github.io/WowForeverClass/)**

El sitio reúne las 9 clases clásicas, sus 27 ramas, las 9 razas jugables —incluida Skyborne con sus dos sendas— y todas las combinaciones válidas en una interfaz editorial, responsive y sin dependencias.

El objetivo no es listar datos por listar: cada clase explica **qué hace bien, qué le cuesta, para qué rol sirve y para quién es**, con una dificultad orientativa y una lectura honesta de sus límites.

## Características

- **9 clases y 27 especializaciones** con ventajas, desventajas, dificultad, rol y veredicto para DPS, tanque, healer y multifunción.
- **9 razas**: las 8 originales más Skyborne, con raciales, trasfondo y variantes de Alianza y Horda.
- **Matriz raza/clase** interactiva con filtros por facción y clase, incluyendo las 6 combinaciones nuevas y las sendas Skyborne.
- **Oráculo aleatorio** con filtros por rol, selección opcional de raza, especialización sugerida y tirada sin repetición inmediata.
- **Guía por rol** para decidir desde la función en grupo y no desde el nombre de la clase.
- Buscador, orden, fichas modales, navegación móvil y soporte de teclado (foco atrapado y cierre con `Escape`).
- Diseño propio con iconos SVG originales, tipografía editorial y layouts verificados de 320 a 1440 px.
- Todos los datos de la beta están fechados y contextualizados: nivel 60, lanzamiento el 4 de noviembre de 2026 y raids el 9 de diciembre.

## Cómo verlo

No requiere instalación ni build. Abrí `index.html` en el navegador o serví la carpeta con cualquier servidor estático:

```bash
npx serve .
```

## Stack

- HTML, CSS y JavaScript vanilla.
- Sin frameworks, sin dependencias y sin paso de compilación.
- Datos separados de la interfaz en archivos `data-*.js`.
- Aleatoriedad con `crypto.getRandomValues`.

## Estructura

```text
index.html          Página única
styles*.css         Estilos base, clases y razas
data-*.js           Clases, razas, roles y matriz
app*.js             Navegación, filtros, fichas y oráculo
icons.js            Sprite SVG e iconos
```

## Aviso

Proyecto fan **no oficial**, sin afiliación con Blizzard Entertainment. World of Warcraft y sus elementos son propiedad de sus respectivos titulares. Los iconos del sitio son de elaboración propia.

---

Hecho para quienes todavía creen que elegir personaje es la mejor parte del juego.
