import './App.css'
import Home from './Component/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Services from './Component/Services'
import Blogs from './Component/Blogs'
import About from './Component/About'
import Contact from './Component/Contact'
import SignupPage from './Component/SignupPage'
import LoginPage from './Component/LoginPage'
import LatestNewsPage from './Component/LatestNewsPage';

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
      },
      {
        path: "/SignupPage",
        element: <SignupPage />
      },
      {
        path: "/LoginPage",
        element: <LoginPage />
      },
      {
        path: "/LatestNewsPage",
        element: <LatestNewsPage />
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
