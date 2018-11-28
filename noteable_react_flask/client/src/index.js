
// ----------------------------------------------------------------------
//  index.js
//  Author: Olivia Zhang, Zoë Barnswell, Lyra Katzman 
// -----------------------------------------------------------------------

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer } from './reducers'
import App from './App'
import './index.css'

const store = createStore(
  homeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
  <div className="app_container">
    <App />
   </div>
  </Provider>,
  document.getElementById('root')
)
