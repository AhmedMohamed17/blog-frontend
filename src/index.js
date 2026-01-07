import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from '../src/pages/ErrorPage';
import Home from '../src/pages/Home';
import UserProfile from '../src/pages/UserProfile';
import Authors from '../src/pages/Authors';
import CreatePost from '../src/pages/CreatePost';
import CategoryPosts from '../src/pages/CategoryPosts';
import AuthorPosts from '../src/pages/AuthorPosts';
import Dashboard from '../src/pages/Dashboard';
import EditPost from '../src/pages/EditPost';
import Logout from '../src/pages/Logout';
import PostDetail from '../src/pages/PostDetail';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import DeletePost from './pages/DeletePost';
import UserProvider from './Context/usercontext.js';





const router = createBrowserRouter([
 {
   path: "/",
  element: <UserProvider><Layout/></UserProvider>,
  errorElement : <ErrorPage/>,
  children:[
   {index: true, element: <Home/>},
   {path:"posts/:id", element: <PostDetail/>},
   {path:"register", element: <Register/>},
   {path:"login", element: <Login/>},
   {path:"profile/:id", element: <UserProfile/>},
   {path:"authors", element: <Authors/>},
   {path:"create",element: <CreatePost/>},
   {path:"posts/categories/:category", element: <CategoryPosts/>},
   {path:"posts/users/:id" ,element: <AuthorPosts/>},
   {path:"myposts/:id",element:<Dashboard/>},
   {path : "posts/:id/edit",element:<EditPost/>},
   {path : "posts/:id/delete",element:<DeletePost/>},
   {path:"logout",element:<Logout/> }

  ]

 }
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


