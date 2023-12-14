// src/components/Home/Home.js
// import CSS
import './Home.css';
import React from 'react';
import background from './school_image.png';


const Home = (props) => {
    return (
        
        <div >
            <div style={{ backgroundImage: `url(${background})`}} className="banner-container">
                <div className="text-center">
                    <h1 className=" text-6xl text-orange-600 font-bold">Welcome to Codebun</h1>
                    <h4 className="text-4xl mt-8 text-white">Your very own personal tutorial corner</h4>
                </div>
            </div>
        </div>
    );
};
export default Home;