import { Suspense, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import MyStore from "./components/MyStore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Izme Store</h1>
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
  );
}

export default App;
