import React, { useEffect, useState } from 'react'
import databaseService from '../../appwrite/database';
import PostCard from '../PostCard/PostCard';
import { Link } from 'react-router-dom';

function LogedInHome() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        try {
            databaseService.getPosts()
            .then((posts) => {
                console.log(JSON.stringify(posts));
                setPosts(posts.documents);
            })
            .catch((error) => console.log("Error while fetching posts : ", error));
        } catch (error) {
            console.log("Error while fetching posts : ", error);
        }
    },[]);
  return (
    <div className="max-w-screen-xl mx-auto p-16">
        <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
            {
                posts.map((post) => (
                    <Link
                        to={`/post/${post.$id}`}
                        key={post.$id}
                    >
                       <PostCard 
                        title={post.title}
                        content={post.content}
                        featuredImage={post.featuredImage}
                        status={post.status}
                        $id={post.$id} 
                        key={post.$id}/>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default LogedInHome