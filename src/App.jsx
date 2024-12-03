import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'


const router = createBrowserRouter(createRoutesFromChildren(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Home />} />
  </Route>
))
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App