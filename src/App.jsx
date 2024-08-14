import React from 'react'
import Materiais from './pages/Materiais'
import Comousar from './pages/Comousar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Materiais/>
  }
])

function App() {
  return (
    <div>
      <Materiais/>
      <Comousar/> 
    </div>
  )
}

export default App