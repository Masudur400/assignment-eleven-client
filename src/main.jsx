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
import ShowAllCategory from './components/ShowAllCategory/ShowAllCategory';
import Details from './components/Details/Details'; 
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

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
        element:<PrivetRoute>
          <Profile></Profile>
          </PrivetRoute>
      },
      {
        path:'/updateProfile',
        element:<PrivetRoute>
          <UpdateProfile></UpdateProfile>
        </PrivetRoute>
      },
      {
        path:'/addBook',
        element:<PrivetRoute>
          <AddBook></AddBook>
        </PrivetRoute>
      },
      {
        path:'/allBooks',
        element:<AllBooks></AllBooks>
      },
      {
        path:'/borrowedBooks',
        element:<PrivetRoute>
          <BorrowedBooks></BorrowedBooks>
        </PrivetRoute>,
        loader:()=>fetch('https://assignment-eleven-server-eosin.vercel.app/books')
      },
      {
        path:'/updateBook/:id',
        element:<PrivetRoute>
          <UpdateBook></UpdateBook>
        </PrivetRoute>,
        loader:({params})=> fetch(`https://assignment-eleven-server-eosin.vercel.app/books/${params.id}`)
      },
      {
        path:'/showAll/:category',
        element:<PrivetRoute>
          <ShowAllCategory></ShowAllCategory>
        </PrivetRoute>, 
        loader:()=>fetch('https://assignment-eleven-server-eosin.vercel.app/books')
      },
       
      {
        path:'/details/:id',
        element:<PrivetRoute>
          <Details></Details>
        </PrivetRoute>,
        loader:()=>fetch('https://assignment-eleven-server-eosin.vercel.app/books')
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
