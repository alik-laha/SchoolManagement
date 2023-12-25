import React from 'react';
import CommonHeader from '../CommonHeader';
import { ContactForm }from '../ContactUs/ContactForm'
import emailjs from '@emailjs/browser'
import Footer from '../Home/Footer';



const ContactUs = (props) => {
    emailjs.init('29DtP64eGRyM55Lbw')

    return (
        <div>
            <CommonHeader/>
            
            <div style={{display:'flex'}} className=''>
                     
                     <ContactForm/>
                    
                    <div style={{marginTop:'5rem',marginLeft:'10rem'}}>
                        <img src={img} alt='clg-img' height={60} width={500}></img> 
                     </div>
            
            </div>
            <Footer/>
        </div>
       
      
    );
};
export default ContactUs;