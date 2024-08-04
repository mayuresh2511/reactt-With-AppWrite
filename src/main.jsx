import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { Home, About, Login, Contact, Register, CreatePost, Post } from './components/index.js'
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'createPost',
        element: <CreatePost/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'post/:id',
        element: <Post/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <ToastContainer/>
  </Provider>,
)
