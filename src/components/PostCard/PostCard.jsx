import React from 'react'

function PostCard({title, content, featuredImage, status, $id}) {
  return (
    <div
        className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
        <div className="py-4 px-8">
            <img src="https://tailwindcss.com/img/jonathan.jpg" className="rounded-full h-12 w-12 mb-4"/>
            <a href="#">
                <h4 className="text-lg mb-3 font-semibold">{title}</h4>
            </a>
            <p className="mb-2 text-sm text-gray-600">{content}</p>

            <img src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="w-100"/>

            <hr className="mt-4"/>
            <span className="text-xs">ARTICLE</span>
            &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
        </div>
    </div>
  )
}

export default PostCard