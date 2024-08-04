import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import databaseService from '../../appwrite/database';

function CreatePost() {
  const {register, handleSubmit} = useForm();
  const isLogedIn = useSelector((state) => state.auth.status);
  const userData = JSON.parse(localStorage.getItem("logedInUser"));
  const createPost = (data) => {
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(userData));
    console.log(userData.providerUid);
    const title = data.title;
    const content = data.content;
    const status = data.status;
    const featuredImage = "test";
    const userId = userData.providerUid;
    databaseService.createPost("6789", {title, content, featuredImage, status, userId});
    toast("Your post is created", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1">

                    <form onSubmit={handleSubmit(createPost)} className="p-6 flex flex-col justify-center bg-gray-400">
                        <div className="flex flex-col">
                            <label htmlFor="text">
                                Title :
                            </label>
                            <input
                                type="text"
                                name="title"
                                disabled={!isLogedIn ? true : false}
                                placeholder="First Blog...."
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                {...register("title", {required: true})}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="text">
                                Content :
                            </label>
                            <input
                                type="text"
                                name="content"
                                disabled={!isLogedIn ? true : false}
                                placeholder="test@123"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                {...register("content", {required: true})}
                            />
                        </div>

                        <div className="flex flex-col mt-2">
                            <select 
                                disabled={!isLogedIn ? true : false}
                                {...register("status")}
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={!isLogedIn ? true : false}
                            className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                        >
                            Submit
                        </button>
                        {
                            !isLogedIn && (<p className="py-4">Please login to create a post ? Please <Link to="/login" className="text-blue-600 hover:text-violet-800">Click Here</Link></p>)
                        }
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost