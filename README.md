# Ejercicio de pruena - Reproducción de podcasts

Aplicación de prueba para reproducir podcasts usando la api de itunes. Existen 2 modos de ejecución de la misma: modo _development_ y modo _production_. La idea es crear una _Single Page Application (SPA)_ que permite reproducir podcasts.

## Primeros pasos

Para construir y ejecutar la aplicación deberemos clonar el repositorio `podcastexercise` e instalar sus dependencias. Para clonar el repositorio es necesario tener instalado Git, puedes obtenerlo en http://git-scm.com/. Para instalar las dependencias es necesario tener instalado un gestori de dependencias como [npm][npm] o [yarn][yarn].

### Clonar el repositorio

Para clonar el repositorio se debe ejecutar la siguiente instrucción:

```
git clone https://github.com/jadelmag/podcastexercise.git
```

### Instalar las dependencias

Para instalar las dependencias primero nos situaremos en la raíz del proyecto (donde se encuentra el `package.json`):

```
cd podcastexercise
```

Llegados a este punto lo único que faltaría sería instalar las dependencias, para ello: `yarn` o `npm install`

## Ejecución de la aplicación

Tenemos dos modos de ejecución de la aplicación, modo _development_ y modo _production_. En el modo _development_ los assets se sirven sin minimizar y en el modo _production_ se sirven concatenados y minimizados.

### Modo _development_

Para ejecutar la aplicación en modo desarrollo debemos situarnos en la raíz del proyecto (donde se encuentra el fichero `package.json`) y ejecutar la siguiente orden:

```
yarn dev
```

Esto iniciará un servidor local de desarrollo. Haz clic en el enlace que se muestra en la consola. El modo _development_ permite recargar la página en el momento que salvas los cambios realizados en el código.

### Modo _production_

Para ejecutar la aplicación en modo producción debemos situarnos en la raíz del proyecto (donde se encuentra el fichero `package.json`) y ejecutar la siguiente orden:

```
yarn build
```

Esta orden construye la aplicación minificada generando ficheros estáticos para producción optimizados para un mejor rendimiento y los coloca en el directorio `build`, el cual queda ya preparado para ser desplegado en producción.

Se puede servir con un servidor estático, por ejemplo con [serve][serve], podemos hacerlo pasándole el directorio `build` creado anteriormente de la siguiente manera:

```
yarn global add serve
serve -s build
```

Para visualizar la SPA en modo _production_ debemos acceder a la URL: http://localhost:5000.

[serve]: https://www.npmjs.com/package/serve
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/

## Ejecutar pruebas E2E con cypress

Cypress es una herramienta Javascript de end-to-end testing. En otras palabras, permite comprobar que la performance de un producto de software recién desarrollado sea buena y corresponda con los requerimientos iniciales, utilizando la automatización.

1. Ejecutar `yarn run cypress:open`.
2. Pulsar en E2E testing.
3. Seleccionamos el navegar, por ejemplo `chrome`, y pulsamos en el botón `Start Testing in Chrome`
4. En la pesstaña Specs aparecen las pruebas a testear.

## Pruebas Unitarias - React Testing Library

1. Para realizar pruebas unitarias hay que instalar las siguientes dependencias:

```sh
yarn add --dev @testing-library/react @testing-library/jest-dom
```

```sh
yarn add vitest
```

2. Modificar el vite.config.ts y añadir lo siguiente:

```json
/// <reference types="vitest" />
/// <reference types="vite/client" />
```

3. Añadir en vite.config.ts la configuración para los test:

```json
    test: {
        environment: 'jsdom',
        globals: true,
    }
```

Dejando el fichero en el siguiente estado:

```json
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		globals: true,
	},
})

```

4. Excluir los ficheros test en el fichero tsconfig.json cuando compile el proyecto:

```json
"exclude": ["**/*.spec.tsx", "**/*.test.tsx"],
```
