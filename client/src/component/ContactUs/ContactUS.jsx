import React from 'react';
import CommonHeader from '../CommonHeader';
import img from '../home/location-ahm.png';
import { ContactForm }from '../ContactUs/ContactForm'
import emailjs from '@emailjs/browser'
import Footer from '../Home/Footer';



const ContactUs = (props) => {
    emailjs.init('29DtP64eGRyM55Lbw')

    return (
        <div>
            <CommonHeader/>
            
            <div className='vision-mision-main text-1xl'>
                     <div className='vision' >
                     <ContactForm/>
                    {/* <img src={img} alt='clg-img'></img> */}
                 Contact US
           
           

                </div>
            
                </div>
            <Footer/>
        </div>
       
      
    );
};
export default ContactUs;