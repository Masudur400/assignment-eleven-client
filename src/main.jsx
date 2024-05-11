import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorePage from './components/ErrorePage/ErrorePage';
import Home from './components/Home/Home';
import AuthProvider from './components/Providers/AuthProvider';
import Login from './components/Login/Login'; 
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import AddBook from './components/AddBook/AddBook';
import AllBooks from './components/AllBooks/AllBooks';
import BorrowedBooks from './components/BorrowedBooks/BorrowedBooks';
import UpdateBook from './components/UpdateBook/UpdateBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorePage></ErrorePage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/updateProfile',
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path:'/addBook',
        element:<AddBook></AddBook>
      },
      {
        path:'/allBooks',
        element:<AllBooks></AllBooks>
      },
      {
        path:'/borrowedBooks',
        element:<BorrowedBooks></BorrowedBooks>
      },
      {
        path:'/updateBook',
        element:<UpdateBook></UpdateBook>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
