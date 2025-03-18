# Tailwind 4 Vue Starter

[Follow this guide](https://flowbite.com/docs/getting-started/vue/) to learn how to set up Tailwind CSS v4 with Vue and Flowbite.

## Create a Vue project

Follow the next steps to install Tailwind CSS (with v4) and Flowbite with Vue 3 and Vite.

1. Create a new Vite project running the following commands in your terminal:

```bash
npm create vite@latest flowbite-app -- --template vue
cd flowbite-app
```

## Install Tailwind CSS

This guide uses the newest version of Tailwind CSS v4 which brings many improvements.

1. Install Tailwind CSS using Vite via the terminal:

```bash
npm install tailwindcss @tailwindcss/vite --save
```

2. Add the Tailwind plugin inside your `vite.config.js` file:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss()
  ],
})
```

3. Import the `tailwind` module inside your `style.css` file:

```css
@import "tailwindcss";
```

You have now installed both Tailwind CSS and Vue and can proceed with the next steps.

## Install Flowbite

The UI components from Flowbite can help you save time building websites with Vue and Tailwind. Make sure that you follow the next steps to ensure that you install both the CSS and JavaScript dependencies.

1. Install Flowbite as a dependency using NPM by running the following command:

```bash
npm install flowbite --save
```

2. Import the default theme variables from Flowbite inside your main `input.css` CSS file:

```css
@import "flowbite/src/themes/default";
```

3. Import the Flowbite plugin file in your CSS:

```css
@plugin "flowbite/plugin";
```

4. Configure the source files of Flowbite in your CSS:

```css
@source "../node_modules/flowbite";
```

## Flowbite Components

Now that you have successfully installed Vue, Tailwind CSS and Flowbite you can start importing and using components from the open-source library of [Flowbite](https://flowbite.com) such as modals, navbars, tables, dropdowns, and more.


4. Start a local development server by running the following command in your terminal:

```bash
npm run dev
```

If you want to build the project then you can run `npm run build`.
