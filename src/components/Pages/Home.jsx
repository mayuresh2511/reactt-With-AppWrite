import {Link, NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogedInHome from './LogedInHome';

export default function Home() {
    const isLogedIn = useSelector((state) => state.auth.status);
    console.log("User loged in status home => " + isLogedIn);
    const isLoading = useSelector((state) => state.loader.isLoading);
    console.log("isLoading status home => " + isLoading);

    if(isLogedIn === true && isLoading === false){
        return (<LogedInHome/>);
    }else{
        return (
            <div className="mx-auto w-full max-w-7xl">
                {
                    isLoading === false
                    ? (
                        <>
                            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                                        <h2 className="text-4xl font-bold sm:text-5xl">
                                            Hi there
                                            <span className="hidden sm:block text-4xl">It's Mayuresh Here. This a simple blog post website</span>
                                        </h2>
                                        
                                    </div>
                                </div>
                
                                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                                </div>
                            </aside>
                
                            <div className="grid  place-items-center sm:mt-20">
                                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
                            </div>
                
                            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">This my own react website.</h1>
                        </>
                    )
                    :(
                        <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Loading....</h1>
                    )
                }
            </div>
        );
    }

}