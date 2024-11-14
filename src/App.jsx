import { useState } from 'react'

import './App.css'
import Counter from './Components/Counter'

function App() {


  return (
    <>
      <h1 className="text-center mt-5">COUNTER APP</h1>
      <div style={{minHeight:'70vh'}} className="d-flex justify-content-center align-item-center w-100 my-5">
        <Counter/>
      </div>
    </>
  )
}

export default App
