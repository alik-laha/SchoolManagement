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
                    
                </div>
            </div>
        </div>
    );
};
export default Home;