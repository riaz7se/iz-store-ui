import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cart from './features/cart/Cart'
import MyStore from './features/items/MyStore'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const [count, setCount] = useState(0)

  const {
    loginWithPopup, 
    loginWithRedirect,
    logout,
    user,
    getAccessTokenSilently,
  isAuthenticated} = useAuth0()
  return (
    isAuthenticated ? <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Izme Store</h1>
      <h3>Logged in User: {user.name} {getAccessTokenSilently}</h3>
      <div className="my-store">
        <Suspense fallback={<h1>Loading Items...</h1>}>
          <MyStore />
        </Suspense>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          My Cart
          <span className="cart-div">
            <Suspense fallback={<h1>Loading Items...</h1>}>
              <Cart />
            </Suspense>
          </span>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  : <div>
     <button onClick={loginWithPopup}>
      Login with Popup
     </button>
      
      <button onClick={loginWithRedirect}>
      Login with Redirect
      </button>
  </div>

  );
}

export default App
