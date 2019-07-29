This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Setup

```sh
yarn
yarn setup
```

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

---

# Endpoint

## STARWARS

| Endpoint                    | Method | Description               |
| --------------------------- | ------ | ------------------------- |
| `/`                         | GET    | Get All Movie             |
| `/film/:movieId`            | GET    | Get Movie By Id           |
| `/film/:movieId/characters` | GET    | Get Characters By MovieId |
| `/film/:movieId/planets`    | GET    | Get Planets By MovieId    |
| `/film/:movieId/species`    | GET    | Get Species By MovieId    |

# PROSESS

```sh
masuk ke page pertama, pilih film masuk ke halaman detail
di bagian bawah ada menu footer, menu footer terdiri dari character, planets, species
pilih character muncul data character berdasrkan episode film,
pilih planets muncul data planets berdasrkan episode film,
pilih species muncul data species berdasrkan episode film,
title star Wars di Header adalah tomobl untuk kembali ke Halaman Pertama
```

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
