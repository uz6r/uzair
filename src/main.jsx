import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Projects from './modules/projects'
import AboutMe from './modules/about-me'
import Blogs from './modules/blogs'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about-me", element: <AboutMe /> },
  { path: "/projects", element: <Projects /> },
  { path: "/blogs", element: <Blogs /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
