import React from 'react'
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div className="flex justify-center items-center flex-col my-20 border-2 py-10 px-5 rounded-lg shadow-lg w-1/4" >
            <form className="text-center ">
                <input className="px-3 outline-none p-2 text-center" type="email" placeholder="Enter your email" />
                <input className="px-3 outline-none p-2 text-center" type="password" placeholder="Enter your password" />
                <input className="px-3 outline-none bg-blue-400 my-2 rounded-lg cursor-pointer text-center font-bold text-white border border-gray-800 w-2/4 px-10" type="submit" value="Login" />
            </form>
            <h3 className="text-center">Don't have an account yet?</h3>
            <Link className="font-medium text-blue-600" to="/register">Create a new account</Link>
        </div>
    )
}
