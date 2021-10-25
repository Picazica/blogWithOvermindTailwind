import React, {useState, useEffect} from 'react'
import { useOvermindState, useOvermindAction } from "../overmind/index";
import Blog from "./Blog"

export default function BlogsPage() {
    const state = useOvermindState();
    const action = useOvermindAction();

    const[add,setAdd]=useState(false);
    const[form,setForm]=useState({description: "", content: "", author:""});

    useEffect(() => {
        action.populateBlogs();
      }, [state.update]);
  
    const submitHandler = (e) =>{
        e.preventDefault();
        action.addPost(form);
        setAdd(prev=>!prev);
    }

    return (
        <div>
            <div className="text-lg m-10 flex justify-center items-center flex-col" >
                <h1 >Blogs currently created</h1>
                <button onClick={()=>setAdd(prev=>!prev)} className="px-3 outline-none bg-blue-400 rounded-lg cursor-pointer text-center font-bold text-white border border-gray-800">Add a new post</button>
            </div>
            <div className="text-lg m-10 flex justify-center items-center flex-col">
                {!add ? "": 
                <div className="  shadow-lg w-2/4 border-2 border-grey-800 rounded-lg">
                    <form className="relative text-center " onSubmit={submitHandler}>
                        <button className="absolute right-px cursor-pointer rounded-lg font-bold " onClick={()=>setAdd(prev=>!prev)}>Close</button>
                        <input required onChange={(e)=>{setForm({...form,description: e.target.value})}} className="px-3 outline-none p-2 text-center" type="text" placeholder="Post description..." />
                        <input required onChange={(e)=>{setForm({...form,content: e.target.value})}} className="px-3 outline-none p-2 text-center" type="text" placeholder="Post Author..." />
                        <input required onChange={(e)=>{setForm({...form,author: e.target.value})}} className="px-3 outline-none p-2 text-center" type="text" placeholder="Post content..." />
                        <input className="px-3 outline-none bg-blue-400 my-2 rounded-lg cursor-pointer text-center font-bold text-white border border-gray-800 w-2/4 px-10" type="submit" value="Add post" />
                    </form>
                </div> }
                <div>
                    {!state.loading ? state.blogs.map(blog=>{
                        return(
                            <ul key={blog.id}>
                                <Blog blog={blog}/>
                            </ul>
                        )
                    }) : <div>Loading...</div>}
                </div>
            </div>
        </div>
    )
}
