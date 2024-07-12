import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/auth/authSlice';
import { Header, Footer } from './components/index';
import {Outlet} from "react-router-dom"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("logedInUser"))
    console.log("User data in APP render....", JSON.stringify(userData));
    if(userData){
      dispatch(login(userData))
    }
  }, [])

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
