# Nombre del Proyecto

> JSON PLACEHOLDER

## Descripción

Este proyecto es una **Single Page Application (SPA)** desarrollada con **React + Vite**, que consume una **API pública** para mostrar datos dinámicos y permite interacción con el usuario mediante un formulario de contacto.

El proyecto incluye:

* **Estado global con Zustand**
* **Rutas con React Router y layouts**
* **Diseño responsive con Tailwind CSS**
* **Paginación en el listado de elementos**
* **Formulario de contacto con validación básica**

## API utilizada

> `https://jsonplaceholder.typicode.com/`

## Instalación

Clonar el repositorio:

```bash
git clone <(https://github.com/YamileOchoa/Examen-react.git)>
cd <react-examen>
```

Instalar dependencias:

```bash
npm install
```

Levantar la aplicación en modo desarrollo:

```bash
npm run dev
```

## Estructura de Carpetas

```text
src/
├── components/
│   ├── Card.jsx
│   ├── CardList.jsx
│   ├── Header.jsx
│   └── Footer.jsx
├── layouts/
│   └── RootLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── Entities.jsx
│   └── Contact.jsx
├── store/
│   └── store.js
├── App.jsx
└── main.jsx
```

## Funcionalidad

### Home Page (`/`)

* Hero section con imagen de fondo y texto de bienvenida
* CardList mostrando 6+ elementos desde el estado global

### Entities Page (`/entities`)

* Fetch de la API para listar todos los elementos
* Cards con la información de cada elemento
* Paginación (botones Prev/Next)
* Fondo neutral para resaltar los cards

### Contact Page (`/contact`)

* Formulario simple con:

  * Nombre (requerido)
  * Email (requerido)
  * Mensaje (textarea)
* Validación básica de campos
* Mensaje de éxito al enviar

## Deploy

> Aquí coloca el link al deploy, por ejemplo en **Vercel** o **Netlify**:
> [examen-react-alpha.vercel.app]

## Video

> Link al video de demostración (YouTube):
> [https://youtu.be/DZjsM0MTVyE]

El video de demostración incluye:

1. Clonación y levantamiento del proyecto
2. Navegación entre páginas
3. Funcionamiento del fetch y uso de Zustand
4. Uso del formulario de contacto

## Tecnologías Utilizadas

* React + Vite
* Zustand (estado global)
* React Router
* Tailwind CSS
* Fetch API

## Autor

* Yamile Ochoa Marin - Tecsup
