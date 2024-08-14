import React from 'react'
import Materiais from './pages/materiais'
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
      <Comousar/> 
    </div>
  )
}

export default App