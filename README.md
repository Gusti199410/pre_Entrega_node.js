#pre_Entrega_node.js
# FakeStore CLI

Aplicación de línea de comandos desarrollada con **Node.js** que permite interactuar con la API de [Fake Store API](https://fakestoreapi.com/) mediante diferentes métodos HTTP.

El proyecto utiliza `process.argv` para recibir comandos desde la terminal y `fetch` para realizar las peticiones a la API.

## Tecnologías utilizadas

* Node.js
* JavaScript
* Fetch API
* Fake Store API
* Git / GitHub

## Funcionalidades

Actualmente la aplicación permite:

* Consultar todos los productos.
* Consultar un producto específico mediante su ID.
* Crear un nuevo producto.
* Eliminar un producto mediante su ID.
* Validar los argumentos ingresados desde la terminal.
* Manejar errores HTTP y errores de los comandos.

## Conceptos de JavaScript utilizados

El proyecto aplica diferentes conceptos de JavaScript moderno:

* `process.argv` para recibir argumentos desde la terminal.
* Destructuring de arrays.
* Rest operator (`...args`).
* Métodos de strings como `split()`.
* Métodos de arrays como `join()`.
* `async/await`.
* `fetch()`.
* `JSON.stringify()`.
* Manejo de errores mediante `try/catch`.

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar al proyecto:

```bash
cd Pre_proyectox
```

Instalar las dependencias:

```bash
npm install
```

## Uso

La aplicación se ejecuta mediante:

```bash
npm run start
```

### GET - Todos los productos

```bash
npm run start GET products
```

### GET - Producto específico

```bash
npm run start GET products/1
```

### POST - Crear producto

```bash
npm run start POST products "Celular" 150 "iphone"
```

Los argumentos corresponden a:

```text
title
price
category
```

### DELETE - Eliminar producto

```bash
npm run start DELETE products/1
```

## Estructura del comando

La aplicación recibe los argumentos utilizando `process.argv`:

```javascript
const [,, method, route, ...args] = process.argv;
```

Por ejemplo:

```bash
npm run start POST products "Celular" 150 "iphone"
```

Se interpreta como:

```text
method   → POST
route    → products
args     → ["Celular", "150", "iphone"]
```

Luego se utiliza destructuring para obtener los diferentes valores necesarios.

## Manejo de errores

La aplicación verifica que las respuestas HTTP sean exitosas:

```javascript
if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
}
```

También valida los argumentos necesarios para cada operación.

## API utilizada

El proyecto utiliza **Fake Store API** para realizar las operaciones sobre productos.

Documentación:

https://fakestoreapi.com/docs

## Autor

**Gustavo Neubauer**

Proyecto realizado como práctica de **Node.js, JavaScript, consumo de APIs y manejo de argumentos desde la terminal**.
