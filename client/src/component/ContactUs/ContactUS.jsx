import React from 'react';
import CommonHeader from '../CommonHeader';
import { ContactForm }from '../ContactUs/ContactForm'
import emailjs from '@emailjs/browser'
import Footer from '../Home/Footer';
import img from '../Home/location-ahm.png'



const ContactUs = (props) => {
    emailjs.init('29DtP64eGRyM55Lbw')

    return (
        <div>
            <CommonHeader/>
            
            <div className='contact-us-seperate'>
                     
                     
            
                    <div className='reach-us' >
                        <p class='text-2xl feedback-responsive'> Reach Us</p>
                   
                        <img className='contct-google-img' src={img} alt='clg-img' height={60} width={500}></img> 
                        <span className='direction-span'>Direction</span>
                        <span style={{marginTop:'25px',width:'80%'}}>
                        <p className='direction-paragraph'> 
                        Distance is 32 km from Kolkata to Al-Hilal Mission ,15 km from DumDum Airport and 6 km from Barasat </p> 
                        <p className='direction-paragraph'> 
                        A walking distance of 7 minutes from Karea Kadamgachi Railway Station
                        and 4 minutes from Kadambagachi Bus Stand </p> 
                        </span>
                        
                     </div>
                     
                     <ContactForm/>
            </div>
            <Footer/>
        </div>
       
      
    );
};
export default ContactUs;