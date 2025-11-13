# PROJECT BRAKE 1 - Dashboard

## Demo personal final
https://voncarlosb.github.io/project-break-dashboard/

Bienvenido al primer PROJECT BREAK. Después de varias semanas de duro trabajo vamos a poner en práctica todo lo que has aprendido.

Vas a crear un Dasboard en el que podrás ver 4 elementos:
- Un reloj digital 24h + Fecha
- Una estación meteorológica
- Un creador de contraseñas seguras
- Un listado de links interesántes
(Además de imagenes random de fondo.)

Cada uno de ellos será independiente entre sí. Se generará una página propia y un script propio. Las CSS también pueden ser propias o generales.

Una vez tengas los cuatro proyectos hechos los uniremos en el `index.html` y funcionarán a la vez.

Desde el index se podrá acceder a cada página, y habrá cambios si está dentro de la página o en el `index.html`.

Aquí puedes ver el ejemplo:
https://carlosdiazgirol.github.io/dashboard/

Es un ejemplo de como lo puedes hacer pero puedes dar rienda suelta tu imaginación, siempre y cuando cumplas con los objetivos. Simepre puedes añadir más funcionalidades si lo deseas.

Una vez tengas el proyecto finalizado, también puede ser antes, lo subiras a github pages para poder verlo en internet. Para poder subir nuestro proyecto a github pages previamente lo tendremos que tener en nuestro repositorio. Una vez ahí iremos a `settings` (está en el menú de cabecera) y dentro aparecerá en el menú lateral `pages`. Clicka y al entrar solo tienes que seleccionar la `branch`(rama) `main`. Y pulsaremos `SAVE`.
Esperaremos un par de minutos, refrescaremos esa página y nos dará una URL. Ahí podras ver tu proyecto en internet.


Vamos a ver que hay que hacer en cada uno de los proyectos: 

## Reloj digital 24h + Fecha:

### ¿Como funciona?
Crea un página que tendrá lo siguiente:

Un reloj digital con la fecha y hora actual del lugar en el que te encuentres. Tendrá las siguientes características: 
- Por un lado tendremos un reloj digital con horas, minutos y segundos que se tendrá que actualizar automaticamente cada segundo que pase.
- Tendrás que formatear las hora. Si las horas, minutos y segundos son menores de 10 habrá que añadir un 0 delante para que quede como 01, 02, ...
- La fecha tendrá formato DD/MM/AAAA 
- Aparecerán unas frases dependiendo un intervalo de horas. Doy una de ejemplo aunque puedes cambiarlas a tu gusto:
  - Desde las 00:01 hasta las 07:00 Es hora de descansar. Apaga y sigue mañana
  - Desde las 07:01 hasta las 12:00 Buenos días, desayuna fuerte y a darle al código
  - Desde las 12:01 hasta las 14:00 Echa un rato más pero no olvides comer
  - Desde las 14:01 hasta las 16:00 Espero que hayas comido
  - Desde las 16:01 hasta las 18:00 Buenas tardes, el último empujón
  - Desde las 18:01 hasta las 22:00 Esto ya son horas extras, ... piensa en parar pronto
  - Desde las 22:01 hasta las 00:00 Buenas noches, es hora de pensar en parar y descansar   
- Dale estilo con CSS

### ¿Qué usaremos?
- `new Date()` Es el objeto que representa la fecha y hora. Tiene varios métodos que nos ayudará a abtener lo que necesitamos:
  - Hora, minutos y segundos
  - Día, mes año
- La hora debe actualizarse sola, es decir que si cambia la hora, el minuto o el segundo deben cambiar automaticamente en pantalla. Piensa en la unidad mínima que se necesita para hacer ese cambio. La fecha también debe cambiar. Para esto podemos usar `setInterval()`
- Necesitaremos condicionales para las frases. Dependiendo la hora saldrá una u otra

### PISTAS PISTAS Y CONSEJOS
- Aquí tienes como usar el constructor de fechas. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
- Aquí los métodos necesarios para componerlo todo https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
- Aquí lo que hace y como funciona `setInterval()` https://developer.mozilla.org/es/docs/Web/API/setInterval 


## Generador de contraseñas seguras:

### ¿Como funciona?
Crea una página que tendrá lo siguiente:
- Tendrá entre 12 caracteres como mínimo y 50 de máximo. Se podrá elegir el número de caracteres
- Se compondrá de mayúsculas, minúsculas, números y símbolos. Mínimo una de cada.
- Tendremos un input dónde meteremos la longitud de la contraseña y un botón para que nos de el resultado.
- Dale estilo con CSS

### ¿Qué usaremos?
- `Math.random()` Para generar aleatoriedad
- Mayúsculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
- Minúsculas: "abcdefghijklmnopqrstuvwxyz"
- Números: "0123456789"
- Símbolos "!@#$%^&*()-_=+"

### PISTAS Y CONSEJOS
- Guarda cada uno de los datos (mayúsculas, minúsculas, símbolos y núemeros) en una variable para poder recorrerlos.
- Usa bucles y condicionales

## Listado de links:

### ¿Como funciona?
Crea una página que tendrá lo siguiente:
- Tendremos 2 inputs. Uno de ellos será el título que aparecerá en cada uno de nuestros elementos. Al pulsar el botón de `añadir link` se añadirá en el DOM pero también en nuestro `localStorage` para poder recuperarlo siempre.
- Cada uno de los elementos tendrá el nombre que hemos añadido y el enlace al pulsar sobre él (ya sea el texto o el bloque completo). También tendrá un botón de eliminar si ya no vamos a hacer uso de él.
- Será un listado de links que funcionará de la misma manera tanto en la página independiente como en el dashboard.
- Dale estilo con CSS

### ¿Qué usaremos?
- `CreateElement`, `appedChild`, ... o directamente un template con `innerHTML`.
- `LocalStorage` para generar persistencia y guardar esos datos.

### PISTAS Y CONSEJOS
- Guarda el dato en el `localStorage` a la vez que se crea en el `DOM`
- Cuando se carga la página el dato del `LocalStorage` deberá aparecer de inicio

## Estación meteorológica:

### ¿Como funciona?
Crea una página que tendrá lo siguiente:
- El tiempo en el momento en el que accedemos a la página con varios elementos:
  - Ciudad y Pais. Pondremos la ciudad y País en el que nos encontramos.
  - El estado del clima.
  - Imagen y grados celsius de nuestra ciudad.
  - Precipitaciones, humedad y viento km/h.
- La previsión por horas en el día en el que estamos. Con su hora, imagen y grados celsius. 
- Dale estilo con CSS.

### ¿Qué usaremos?
- API del tiempo de `https://www.weatherapi.com/`
- Necesitarás una API KEY. Podrás conseguirla entrando en la url de weatherapi y pulsando en signup. Rellena los datos que pide y nada más entrar os aparecerá esa API KEY.
- Puedes probar que funciona en esta página: `https://www.weatherapi.com/api-explorer.aspx` metiendo la APIKEY y dándole al botón de `show response`
- Aquí está la documentación completa `https://www.weatherapi.com/docs/`
- Este es el `base URL` al que tendréis que acceder `http://api.weatherapi.com/v1` añadiremos detrás lo que necesitemos. 
 - Este es un ejemplo de endpoint con la APIKEY y la ciudad. Solo habría que cambiar los datos de `${apiKey}` por la nuestra y `${ciudad}` por la elegida por nosotros `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
- `fetch` para hacer peticiones a la API.

### PISTAS Y CONSEJOS
- La URL base es `http` cámbiala desde el inicio por `https` para no tener problemas en el futuro de bloqueos de seguridad.
- Usa `promesas` o `ASYNC/AWAIT` para crear la asincronía en las peticiopnes `fetch`
- Piensa si necesitas solo un endpoint o varios. Revisa que trae cada petición.
- Estructura bien tu código 

## Imagenes random background:

### ¿Como funciona?
Todas las páginas de tu proyecto tendrán una imagen random de background. Cambiará cada 15 segundos (o el tiempo que decidas).

### ¿Qué usaremos? 
- `Math.random()` para generar aleatoriedad
- En esta página `https://unsplash.com/es` podrás sacar imagenes de calidad de manera gratuíta. Puedes elegir otras páginas sin problema. O directamente desde goolge. Usa 10 minagenes mínimo para darle más dinamismo
- Estilos en línea que añadiremos con JS. 
  - Este puede ser un ejemplo: `document.body.style.backgroundImage = "url('mi-imagen.jpg')"`;
- `setInterval` para darle ese tiempo de cambio

### PISTAS Y CONSEJOS
Puedes generar de inicio una imagen de fondo por CSS o directamente hacer que la función se invoque y luego cada 15 segundos, o el tiempo que decidas.

_____________________________________________

### CONSEJOS GENERALES
- 80% Pensar, 20% programar.
- Coge boli y papel y genera tu proyecto en un cuaderno. Divide el problema en otros pequeños y ve resolviéndolos poco a poco.
- Comienza por lo que te parezca más fácil. Elige uno de los cuatro y ve construyendo según se acaba.
- Organiza bien tus archivos y carpetas (JS, CSS, assets/img, ...).
- Crea cada parte independiente de las demás. Luego únelas en el `index.html`.
- Crea un script diferente por cada una de las partes. Luego puedes poner en cada archivo HTML los scripts necesarios. 1,2... o todos.
- Línea que se escribe, programa que se prueba. console.log() para todo. Es más fácil solucionar paso a paso que hacer ingeniería inversa.
- Las rutas que se escriben para las imagens que hagamos dentro de nuestros JS, cuando renderizan es probable que de error cuando esté subida a `github pages`. Revisa tus rutas relativas `./` o `../`
- Usa internet para buscar soluciones. No las copies, entiendelás y hazlas tuyas.
