import CommonHeader from '../CommonHeader';
import '../Home/Home.css'
import Footer from '../Home/Footer';
import React from 'react';
const DownloadForms = ()=>{
    return(
       
        
            <div >
                <CommonHeader/>
                <div className='vision-mision-main text-1xl dropdown-text-desktop'>
                <table class="styled-table">
        <thead>
            <tr>
                <th>Sl. No.</th>
                <th>Download Form</th>
             
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>5:30 AM </td>
                <td>Waking Up and Morning Routine</td>
            </tr>
            <tr>
                <td>5:45 AM </td>
                <td>Fajr Prayer and Quran Recitation</td>
            </tr>
            
            <tr>
                <td>6:15 AM </td>
                <td>Physical Exercise and Prayer</td>
            </tr>
            <tr>
                <td>6:30 AM </td>
                <td>Breakfast</td>
         
            </tr>
            <tr>
                <td>6:45 AM - 9:45 AM </td>
                <td>Coaching/Prep Classes</td>
          
            </tr>
            <tr>
                <td>	9:45 AM - 10:40 AM </td>
                <td>Bath and Morning Meal</td>
            </tr>
            <tr>
                <td>	10:50 AM 	  </td>
                <td>National Anthem</td>
               
            </tr>
            <tr>
                <td>	11:00 AM - 3:45 PM 	  </td>
                <td>Study Session</td>
        
            </tr>
          
           
           
    
    
            
        </tbody>
    </table>
    <p style={{margin:'5%',fontWeight:'bold'}}>Note: The schedule may be subject to change based on seasonal variations.</p>
                </div>
                <Footer/>
            </div>
    )
}
export default DownloadForms;