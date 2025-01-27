import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='bg-neutral-200 overflow-x-hidden '>
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>,
)
