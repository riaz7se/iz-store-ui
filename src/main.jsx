import { Auth0Provider } from '@auth0/auth0-react';
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
      <Auth0Provider
        domain='dev-qn2gp0ms063jr0lz.us.auth0.com'
        clientId='gVL1hd6LoYRPTqN5Qvwz4umGWhzZCm1M'
        redirectUri={window.location.origin}
      >
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
      </Auth0Provider>
    </Provider>
    
  </React.StrictMode>
)
