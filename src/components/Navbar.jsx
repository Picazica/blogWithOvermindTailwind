import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="flex items-center justify-center space-x-36 text-blue-500">
            <Link to="/" >
                Front page
            </Link>
            <Link to="/blogs" >
                Blogs
            </Link>
            <Link to="/login">
                Login
            </Link>
            <Link to="/about">
                About page
            </Link>
        </div>
    )
}
