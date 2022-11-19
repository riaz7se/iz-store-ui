import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cart from './components/Cart'
import MyStore from './components/MyStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Izme Store</h1>
      <div className="my-store">
        <MyStore/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          My Cart
            <span className="cart-div">
              <Cart/>
            </span>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
