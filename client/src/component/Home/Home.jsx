// src/components/Home/Home.js
// import CSS
import './Home.css';
import React, { useState ,useEffect} from 'react';
import background from './school_image.jpg';
import img4 from '../Galllery/GalleryImage/img1.jpg'
import img2 from '../Galllery/GalleryImage/img9.jpeg'
import img3 from '../Galllery/GalleryImage/facultyimg1.jpg'
import NoticeBoardRenderHome from "../NoticeOutput/NoticeBoardRenderHome.jsx";
import PaymentTab from './PaymentTab.jsx';


const Home = (props) => {
    const ismob= window.innerWidth<768;
    const [bgimage,setBgimage]=useState(img2)
    const [actvindex,setactvIndex]=useState(0)
    const images= [img3,img4,img2];
    const intervalduration= 7000


    useEffect(()=>{
        const interval = setInterval(() => {
          //do something here

            const currentindex= images.indexOf(bgimage)
            const nextindex=(currentindex+1)%images.length;
            setBgimage(images[nextindex])
          
            setTimeout(() => {
                setactvIndex(nextindex)
            }, 7000);

        
        }, intervalduration);

           return ()=> clearInterval(interval)
      },[bgimage,images])

      const chngBgimg=(image,index)=> {
        setBgimage(image)
        setactvIndex(index)
      }


    return (
        
        <div >
            
            {/* <div style={{ backgroundImage: `url(${bgimage})`}} className={`banner-container home-carousel ${nxtimg? 'fade':''}`}> */}
            <div style={{ backgroundImage: `url(${bgimage})`}} className="banner-container home-carousel" >
                {!ismob && <div className="payment-tab">
                    <PaymentTab/>
                    

                </div> }
                {!ismob &&<div className="noticeboard">
                
                <NoticeBoardRenderHome />
                

            </div>}
           
            
           
                <div className='indicator-container'>
                    {images.map((_,index) => (<div key={index} className={`indicator ${actvindex===index? 'indicator-active':''}`}
                    onClick={()=> chngBgimg(images[index],index)}></div>))}
                </div>
               
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