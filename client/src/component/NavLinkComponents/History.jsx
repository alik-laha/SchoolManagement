
import React from 'react';
import CommonHeader from '../CommonHeader';
import '../Home/Home.css'
import Footer from '../Home/Footer';
import founder from '../Home/Founder.jpeg'

const History = () => {
    return (
        <div >
        <CommonHeader/>
        <div style={{fontSize:'12px'}} className='vision-mision-main text-1xl'>
        <div className='vision' >
        <div className='vision-flex' >
        <div  className='width-65' >
        <br/><p><b>
Introductory Note by the Founder and General Secretary of Al Hilal Mission
</b></p> <br/>
            Bismillah Hir Rahmanir Rahim<br/>
            As Salamu Alaimkum,<br/><br/>
            &nbsp;&nbsp;&nbsp;As we celebrate the 25-year milestone of Kadambagachi Al Hilal Mission, I am filled with immense gratitude and pride for the journey we have undertaken together since our establishment in 1999. As the Founder and General Secretary, I am honored to share a brief overview of our organization's mission and accomplishments.
Al Hilal Mission emerged from a vision to bridge the educational gap faced by educationally backward minority communities. Our journey commenced with a handful of students and the unwavering dedication of numerous enthusiastic individuals who believed in the transformative power of education. Little did we know that our humble beginnings would evolve into a beacon of hope and progress for those seeking modern quality education.


            
            </div>
        <div  className='founder-img-div '>
            <img src={founder} height={1100} width={400} alt='Founder-Image'></img>
            <p className='founder-image-desc'>Founder Mr. Shahabuddin Gaine</p>
        </div>
        </div>
        <div><br/>Our primary focus has always been on spreading education that goes beyond mere academic knowledge, aiming to empower individuals to excel in various aspects of life. 
Thank you for being an integral part of Al Hilal Mission's success story.We recognize the challenges faced by minority communities, and through Al Hilal Mission, we have endeavored to provide a pathway to success for those who might otherwise be overlooked.
Over the years, Al Hilal Mission has transcended state boundaries, leaving an indelible mark on the educational landscape. Today, we take pride in the diverse group of students we have nurtured, who are now actively contributing to the betterment of our nation. From the fields of medicine and engineering to administration, education, business, and beyond, our alumni are making a difference in society.
As we celebrate this 25-year milestone, I extend my heartfelt thanks to everyone who has been part of this incredible journey. Your support, dedication, and belief in our mission have been instrumental in our success. Together, we have transformed challenges into opportunities, and our impact continues to ripple through the lives of those we serve.
Looking ahead, Al Hilal Mission remains committed to its ideals of providing quality education, fostering cultural understanding, and engaging in social welfare activities. With your continued support, we aim to reach even greater heights, empowering more individuals and contributing to the progress of our nation.
<br/>
<br/>
Warm regards,
<br/>
SHAHABUDDIN GAINE</div>
        </div>
      
        
       
        </div>
        <Footer/>
    </div>
    );
};
export default History;