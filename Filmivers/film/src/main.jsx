import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Login from './Pages/Login';
import Home from './Pages/Home';
import CreateAccount from './Pages/CreateAccount';
import ListFilm from './Pages/ListFilm';
import Genre from './Pages/Genre';
import Watch from './Pages/Watch';
import Search from './Pages/Search';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/signin",
      element: <Login/>
    },
    {
      path:"/create-account",
      element: <CreateAccount/>
    },
    {
      path: "/list-film",
      element: <ListFilm/>
    },
    {
      path: "/genre",
      element: <Genre/>
    },
    {
      path: "/watch/:id",
      element: <Watch/>
    },
    {
      path:"/search/:param",
      element:<Search/>
    }
  ]},
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
