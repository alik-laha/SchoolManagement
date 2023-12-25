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
            
            <div className=''>
                     <div  >
                     <ContactForm/>
                    {/* <img src={img} alt='clg-img' height={30} width={300}></img>  */}

                </div>
            
            </div>
            <Footer/>
        </div>
       
      
    );
};
export default ContactUs;