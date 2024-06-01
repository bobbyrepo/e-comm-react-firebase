import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './utils/redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap App with Provider to connect Redux store
  <Provider store={store}>
    <App />
  </Provider>
)
