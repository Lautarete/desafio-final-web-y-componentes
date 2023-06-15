# Estructura

- Home (index.html):
  - Secciones:
    - Bienvenida
    - Presentación
    - Mis servicios
    - Formulario de contacto
- Portfolio (portfolio.html)
- Servicios (servicios.html)
- Contacto (contacto.html)

# Notas

- El portfolio y los servicios tienen el mismo diseño, solo cambian en el contenido.
- Header, footer y el formulario son componentes reutilizables. Tambien servicios y trabajos tienen los mismos diseños, por lo que se podria reutilizar el mismo codigo.
- Reemplazar contenido
- "Bienvenida", "Presentacion", "Servicios" y "Portfolio" deben ser administrado desde Contentfull(js)
- La seccion de mail del formulario muestra como resolverlo en la pagina del desafio
- HAY QUE TENER UN ARCHIVO "README.MD" con la url de la gitHub page

# Orden maso...

- Crear "header" y "footer" de forma reutilizable
- Crear "mis trabajos" (y "portfolio"):
  - Programar en JavaScript para que la parte reutilizable (la parte del contenido) este de forma correcta en la home
  - Programar el JavaScript que de la pagina
- Crear el form, la reutilizacion de este y el JavaScript del propio form
- Crear Home, mobile y desktop
- Dar "href" a los links en: header, footer
- Crear todas las paginas del sitio

# Fonts

- póppins 400 y 700

# en que quede

- HACER UN FUCKING COMMIT
- solucionar el error 400 del form
- crear el resto de paginas (portfolio, servicios y contacto)
- añadir un parametro para mountServicesJobs, para pedir services o jobs,
  asi la funcion read api elije si devuelve las cards con class services o
  jobs
- personalizar el contenido
- colocar links en las cards
