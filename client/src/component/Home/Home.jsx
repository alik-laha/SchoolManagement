// src/components/Home/Home.js
// import CSS
import './Home.css';
import React from 'react';
import background from './school_image.png';
import NoticeBoardRenderHome from "../NoticeOutput/NoticeBoardRenderHome.jsx";


const Home = (props) => {
    return (
        
        <div >
            <div style={{ backgroundImage: `url(${background})`}} className="banner-container">
                <div className="text-center" style={{backgroundColor:"white"}}>
                    <NoticeBoardRenderHome />
                </div>
            </div>
        </div>
    );
};
export default Home;