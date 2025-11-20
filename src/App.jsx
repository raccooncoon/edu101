import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(1);

  function increate() {
    setCount(count + index)
  };

    function decreate() {
    setCount(count - index)
  }

  function indexChange(e) {
    setIndex(Number(e.target.value))
  }

  return (
    <>
      <h1>{count}</h1>

      <input type="number" onChange={indexChange}></input><br/><br/>

      <button onClick={increate}>+{index}</button>
      <button onClick={decreate}>-{index}</button>
    </>
  )
}

export default App
