import React from 'react'
import { Link } from "react-router-dom";


export default function FrontPage() {
    return (
        <div className="my-20">
            <h1 className="text-lg">To be able to check blogs please <Link className="font-medium text-blue-600" to="/login">Login</Link></h1>
        </div>
    )
}
