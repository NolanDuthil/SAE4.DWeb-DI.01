import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import ErrorPage from './ui/ErrorPage/index.jsx';
import Home, { loader as homeloader } from "./routes/home.jsx";
import Film, { loader as filmloader } from "./routes/movie.jsx";
import Select, { loader as selectloader } from "./routes/select.jsx";


import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: < ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>, 
        loader: homeloader,
      },
      {
        path: '/Film/:id',
        element: <Film/>, 
        loader: filmloader,
    },
    {
      path: '/Select',
      element: <Select/>, 
      loader: selectloader,
    },
    ]
  },
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
