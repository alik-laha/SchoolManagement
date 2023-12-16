
import React from 'react';
import CommonHeader from '../CommonHeader';
import '../Home/Home.css'
import Footer from '../Home/Footer';

const VisionMision = (props) => {
    return (
        <div >
            <CommonHeader/>
            <div className='vision-mision-main text-1xl'>
            <div className='vision'>
            <h1><b>Vision:</b> </h1><br/><p><b>To create a harmonious and progressive society where education serves as the catalyst for holistic development.</b></p> <br/>
We envision a future where individuals, empowered by knowledge and guided by strong ethical values, contribute to economic prosperity, cultural preservation, and societal well-being. Our vision encompasses a society where healthcare initiatives ensure public welfare, and educational opportunities are accessible to every segment, fostering a spirit of competition and excellence. Through these efforts, we aspire to build a vibrant and inclusive community that thrives in diverse fields, creating a sustainable and enlightened society for generations to come."

            </div>
            <div className='mission'>
            <h1><b>Mission :</b> </h1><br/><p><b>To advance societal development through a comprehensive and integrated approach, with education as the cornerstone. </b></p> <br/>
The mission involves empowering individuals, particularly academically talented students from rural areas, to pursue higher education while preserving and promoting local culture. It emphasizes the importance of ethical and character development through education, and the establishment of healthcare initiatives for public welfare, especially in the post-COVID era. Encouraging success in competitive examinations and promoting participation in diverse fields of higher education are integral parts of the mission, aiming to create a society that excels across various dimensions for a sustainable and prosperous future."

            </div>
            </div>
            <Footer/>
        </div>
       
      
    );
};
export default VisionMision;