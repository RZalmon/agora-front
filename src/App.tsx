import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ran + Almog === {'<'}3</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is not {count}
        </button>
      </div>
    </>
  )
}

export default App
