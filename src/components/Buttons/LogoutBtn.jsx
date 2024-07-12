import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../features/auth/authSlice'
import { setLoading, unSetLoading } from '../../features/loader/loaderSlice'

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutBtnClick = () => {
        console.log("Logout was triggered.....")
        dispatch(setLoading())
        authService.logout()
        .then(
            (result) => {
                dispatch(logout())
                localStorage.removeItem("logedInUser")
            }
        )
        .catch(error => console.log("Error occured while log out..."))
        .finally(() => {
            dispatch(unSetLoading())
        })
    }

    return (
    <button
        onClick={logoutBtnClick}
    > Log Out </button>
    )
}

export default LogoutBtn