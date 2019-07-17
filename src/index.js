import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './store'
import './assets/style/index.sass'
import modules from './modules'
// import App from './App'
import * as serviceWorker from './serviceWorker'

const RootComponent = (
  <Provider store={store}>
    <Routes />
  </Provider>
)

ReactDOM.render(RootComponent, document.getElementById('root'))

if (modules.hot) {
  modules.hot.apply()
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
