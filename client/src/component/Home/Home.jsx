// src/components/Home/Home.js
// import CSS
import './Home.css';
import React from 'react';
import background from './school_image.jpg';
import NoticeBoardRenderHome from "../NoticeOutput/NoticeBoardRenderHome.jsx";
import PaymentTab from './PaymentTab.jsx';


const Home = (props) => {
    const ismob= window.innerWidth<768;

    return (
        
        <div >
            <div style={{ backgroundImage: `url(${background})`}} className="banner-container">
                {!ismob && <div className="payment-tab">
                    <PaymentTab/>
                    

                </div> }
                {!ismob &&<div className="noticeboard">
                
                <NoticeBoardRenderHome />

            </div>}
            </div>
            {ismob && <div className="noticeboard">
                    <NoticeBoardRenderHome />
                   
                    </div>}
                    {ismob && <div className="payment-tab">
                    <PaymentTab/>
                    

                </div> }
        </div>
    );
};
export default Home;