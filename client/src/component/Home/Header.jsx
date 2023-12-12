// src/components/Header.js
import React from 'react';
const Header = () => {
    return (
        <div className="navbar bg-[#FA7D19] text-white  px-16">
        <div className="flex-1">
            <a href="#" className="btn btn-ghost normal-case text-3xl">CodeBun</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0 font-bold">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Blogs</a></li>
                <li><a>Contact Us</a></li>
            </ul>
        </div>
    </div>
    );
};
export default Header;