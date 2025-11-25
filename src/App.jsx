import React from 'react'
import Home from './Comonents/Home'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className=" selection:bg-gray-700 selection:text-[#f2f2f2]">
        <Home />
      </div>
    </>
  )
}

export default App
