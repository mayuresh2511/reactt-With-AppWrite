import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import authService from '../../appwrite/auth';
import { login as authStoreLogin } from "../../features/auth/authSlice"

function Register() {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const signup = (data) => {
    console.log("Simulating user registeration 1....", JSON.stringify(data))
    authService.register(data.email, data.password, data.name)
    .then((userData) => {
        console.log("Loged in user data => " + JSON.stringify(userData));
        dispatch(authStoreLogin(userData))
        localStorage.setItem("logedInUser", JSON.stringify(userData))
        navigate('/')
    })
    .catch(error => console.log("Error occured while log in..."))
  }

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2 bg-gray-400 sm:rounded-lg">
                        <h1 className="text-2xl sm:text-3xl text-gray-800 font-extrabold tracking-tight">
                            Register With Following Partenrs: 
                        </h1>
                        <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                            ----------------------------------------
                        </p>

                        <div className="flex items-center mt-8 text-gray-600">
                            <Link to="#" className="flex items-center p-1 rounded-lg bg-orange-500 hover:bg-orange-600">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                                    className="mr-3 h-12"
                                    alt="Logo"
                                />
                                Signup with Google
                            </Link>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600">
                            <Link to="#" className="flex items-center p-1 rounded-lg bg-blue-500 hover:bg-blue-600">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                                    className="mr-3 h-12"
                                    alt="Logo"
                                />
                                Signup with Facebook
                            </Link>
                        </div>

                        <div className="flex items-center mt-2">
                            <Link to="#" className="flex items-center p-1 rounded-lg bg-gray-500 hover:bg-gray-600">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                                    className="mr-3 h-12"
                                    alt="Logo"
                                />
                                Signup with GitHub
                            </Link>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(signup)} className="p-6 flex flex-col justify-center bg-gray-400">
                        <div className="flex flex-col">
                            <label htmlFor="name">
                                Name :
                            </label>
                            <input
                                type="name"
                                name="name"
                                placeholder="John Wick"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                {...register("name", {required: true})}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">
                                Email :
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="test@123"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                {...register("email", {required: true})}
                            />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="password">
                                Password :
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="strongpassword"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                {...register("password", {required: true})}
                            />
                        </div>

                        <button
                            type="submit"
                            className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                        >
                            Submit
                        </button>
                        <p className="py-4">
                            Already have an account ? Please <Link to="/login" className="text-blue-600 hover:text-violet-800">Click Here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Register