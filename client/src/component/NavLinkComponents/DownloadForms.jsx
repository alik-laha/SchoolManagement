import CommonHeader from '../CommonHeader';
import '../Home/Home.css'
import Footer from '../Home/Footer';
// import React from 'react';
const DownloadForms = ()=>{
    return(
       
        
            <div >
                <CommonHeader/>
                <div className='vision-mision-main text-1xl dropdown-text-desktop'>
                <table className="styled-table">
        <thead>
            <tr>
                <th>Sl. No.</th>
                <th>Download Form</th>
             
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Waking Up and Morning Routine</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Fajr Prayer and Quran Recitation</td>
            </tr>
            
            <tr>
                <td>3 </td>
                <td>Physical Exercise and Prayer</td>
            </tr>
            <tr>
                <td>4 </td>
                <td>Breakfast</td>
         
            </tr>
            <tr>
                <td>5 </td>
                <td>Coaching/Prep Classes</td>
          
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