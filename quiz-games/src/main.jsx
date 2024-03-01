import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainPage from './MainPage/MainPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainPage />
  },
  {
    path:'*',
    element: <h1>Page Not Found</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
