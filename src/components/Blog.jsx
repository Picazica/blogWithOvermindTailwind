import React from 'react'
import { useOvermindAction } from "../overmind/index";


export default function Blog({blog}) {
    const action = useOvermindAction();

    const deletePost = (e)=>{
        const id=e.target.dataset.id;
        action.deleteBlog(id);
    }

    return (
        <li className="flex items-center justify-center flex-col">
            <h2 className="m-1">Description: {blog.description}</h2>
            <p className="m-1">Content: {blog.content}</p>
            <h3 className="m-1">By: {blog.author}</h3>
            <button data-id={blog.id} onClick={(e)=>deletePost(e)} className="px-3 outline-none bg-blue-400  rounded-lg cursor-pointer text-center font-bold text-white border border-gray-800">Delete post</button>
        </li>
    )
}
