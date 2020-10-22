# node-social

_EL backen para una red Social no tan compleja._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Lo que necesitaras para ejecutar el proyecto._

```
node --version
v12.18.3
```

```
npm --version
6.14.6
```

### Instalación 🔧

_Antes de ejecutar el servidor y los microservicios deberas instalar las dependencias._

```
npm install
```

_Luego tendras que iniciar los microservicios para hacer las peticiones._
_**API / PRINCIPAL**_

```
pm2 start api/index.js
```

_**DB / MYSQL**_

```
pm2 start mysql/mysql-index.js
```

_**CACHE / REDIS**_

```
pm2 start cache/cache-index.js
```

_**POST**_

```
pm2 start post/post-index.js
```

_Con esto levantaras todos los microservicios para hacer las peticiones._

## Despliegue 📦

_Servidor desplegado en NOW/VERCEL_

_**INSTALAR NOW**_

```
npm i -g now
```

_**LOGIN NOW**_

```
now login
```

_**DEPLOY**_

```
now
```

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

- [Node](https://nodejs.org/es/) - Para poder correr JS en servidor.
- [Express](https://expressjs.com/) - Framework para la creacion de servidores más rapido.
- [Remote Mysql](https://remotemysql.com/) - MySQL con todas sus funciones de manera remota.
- [Redis Labs](https://redislabs.com/) - Como DB para guardar el cache.
- [JavaScript](https://www.javascript.com/) - Como lenguaje principal para el proyecto.

## Autores ✒️

_Autor de inicio a fin de el proyecto._

- **Martin Tecún** - _Trabajo Inicial_ - [tecunMartin](https://github.com/tecunMartin)

## Licencia 📄

Este proyecto está bajo la Licencia MIT License - mira el archivo [LICENSE](LICENSE) para detalles.

## Expresiones de Gratitud 🎁

- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.
- etc.

---
