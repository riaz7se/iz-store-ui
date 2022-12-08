import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react';
import App from './App'
import './index.css'
import store from './store'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
    
  </React.StrictMode>
)
