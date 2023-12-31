import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Search from './pages/Search';
import All from './pages/All';
import Contact from './pages/Contact';

import { createBrowserRouter, createHashRouter, RouterProvider, Router} from "react-router-dom";

const router = createHashRouter([

  {
    path: '/',
    element: <App />
  },

  {
    path: '/Search',
    element: <Search />
  },

  {
    path: '/All',
    element: <All />
  },

  {
    path: '/Contact',
    element: <Contact />
  }


], {basename: '/'})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );

