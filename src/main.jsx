import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { theme } from './theme.js'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from './components/Projects.jsx'
import Favorites from './components/Favorites.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/projects', element: <Projects/>},
      {path: '/favorites', element: <Favorites/>},
    ],
    errorElement: <div>404 Not Found</div>,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
)
