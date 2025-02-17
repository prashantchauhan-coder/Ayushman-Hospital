import './App.css'
import Home from './Component/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Services from './Component/Services'
import Blogs from './Component/Blogs'
import About from './Component/About'
import Contact from './Component/Contact'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Services",
        element: <Services />
      },
      {
        path: "/Blogs",
        element: <Blogs />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
