import CommonHeader from '../CommonHeader';
import '../Home/Home.css'
import Footer from '../Home/Footer';
import React from 'react';

import path1 from '../NavLinkComponents/sample_student_admission.pdf'
import path2 from '../NavLinkComponents/sample_payment.pdf'
import path3 from '../NavLinkComponents/sample_admit.pdf'

const DownloadForms = ()=>{
    return(
       
        
            <div >
                <CommonHeader/>
                <div className='vision-mision-main text-1xl dropdown-text-desktop'>
                <table className="styled-table download-form">
        <thead>
            <tr>
                <th style={{width:'5%'}}>Sl. No.</th>
                <th>Download Form</th>
             
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={{width:'5%'}}>1</td>
                <td><a href={path1} download>Sample Student Admission Form</a></td>
            </tr>
            <tr>
                <td style={{width:'5%'}}>2</td>
                <td><a href={path2} download>Sample Admission/Readmission Payment Form</a></td>
            </tr>
            
            <tr>
                <td style={{width:'5%'}}>3 </td>
                <td><a href={path3} download>Sample Exam Admit Card </a></td>
            </tr>
           
          
          
           
           
    
    
            
        </tbody>
    </table>
    
                </div>
                <Footer/>
            </div>
    )
}
export default DownloadForms;