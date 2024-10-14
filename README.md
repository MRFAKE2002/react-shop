# Introduction

This is E-commerce website using react typescript tailwind. Source link: https://youtube.com/playlist?list=PLprvbQiR3cN9MuBFjHJq-ShYnjjvLQ9dk&si=N9caHlTsuT_notHV

# Project Steps

1: In this project we use Vite to make configuration of project. 

### `npm create vite@latest`

2: We Install react router dom for make our pages.

### `npm i react-router-dom`

3: Add 'BrowserRouter' tag from react-router-dom in main.tsx for make our pages memory.

4: Add 'Routes' tag from react-router-dom in app.tsx for make 'Route' for our pages.

5: Make Home page for 'Route' element.

6: Make Store page for 'Route' element.

7: At first we make the navbar for project; So we make the navbar component and add it in App.tsx cause we must have it in all pages.

8: At this project we want use tailwind; So we need to install it.

### `npm install -D tailwindcss postcss autoprefixer`

Then we have to install tailwind configuration.

### `npx tailwindcss init -p`

Then add its configuration.

9: Make our navbar using tailwind; So we make our links for pages and Make button for Cart. We need to make the container component.
So we send our links as children into container component.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
