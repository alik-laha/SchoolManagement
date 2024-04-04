import CommonHeader from '../CommonHeader';
import '../Home/Home.css'
import Footer from '../Home/Footer';
import React from 'react';

const Schedule=()=>{
    return(
        
        <div >
            <CommonHeader/>
            <div className='vision-mision-main text-1xl dropdown-text-desktop'>
            <table class="styled-table">
    <thead>
        <tr>
            <th>Time</th>
            <th>Header</th>
            <th>Activity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>5:30 AM </td>
            <td>Waking Up and Morning Routine</td>
            <td>Start the day with waking up at 5:30 AM, followed by personal hygiene routines.</td>
        </tr>
        <tr>
            <td>5:45 AM </td>
            <td>Fajr Prayer and Quran Recitation</td>
            <td>Engage in the Fajr prayer and dedicate time for reciting and understanding the Quran.</td>
        </tr>
        
        <tr>
            <td>6:15 AM </td>
            <td>Physical Exercise and Prayer</td>
            <td>Focus on physical fitness and prayer accompanied by meditative reflections (limitless and boundless...).</td>
        </tr>
        <tr>
            <td>6:30 AM </td>
            <td>Breakfast</td>
            <td>Have breakfast with tea, including biscuits/toast.</td>
        </tr>
        <tr>
            <td>6:45 AM - 9:45 AM </td>
            <td>Coaching/Prep Classes</td>
            <td>Attend coaching or preparatory classes during this time.</td>
        </tr>
        <tr>
            <td>	9:45 AM - 10:40 AM </td>
            <td>Bath and Morning Meal</td>
            <td>Take a bath and have the morning meal, including rice and lentils with 						vegetables.</td>
        </tr>
        <tr>
            <td>	10:50 AM 	  </td>
            <td>National Anthem</td>
            <td>Listen to the national anthem.</td>
        </tr>
        <tr>
            <td>	11:00 AM - 3:45 PM 	  </td>
            <td>Study Session</td>
            <td>Engage in study sessions.</td>
        </tr>
        <tr>
            <td>		1:30 PM - 1:50 PM 	  </td>
            <td>Dhuhr Prayer</td>
            <td>Perform the Dhuhr prayer .</td>
        </tr>
        <tr>
            <td>	3:45 PM - 4:10 PM 	  </td>
            <td>Lunch</td>
            <td>Have lunch, including rice, lentils, and one non-vegetarian item (except on Saturdays).</td>
        </tr>
        <tr>
            <td>		4:20 PM 	  </td>
            <td>National Anthem</td>
            <td>Perform the Asr prayer and dedicate time to Quranic education.</td>
        </tr>
        <tr>
            <td>4:40 PM - 5:20 PM   </td>
            <td>Sports/Rest</td>
            <td>Engage in sports activities or take a rest.</td>
        </tr>
        <tr>
            <td>		5:30 PM 	  </td>
            <td>Maghrib Prayer and Religious Education</td>
            <td>Perform the Maghrib prayer and receive religious teachings.</td>
        </tr>
        <tr>
            <td>		6:00 PM - 9:30 PM 	  </td>
            <td>Study Session</td>
            <td>Continue studying during this period.</td>
        </tr>
        <tr>
            <td>		9:45 PM	  </td>
            <td>Isha Prayer</td>
            <td>Perform the Isha prayer.</td>
        </tr>
        <tr>
            <td>10:00 PM	  </td>
            <td>Dinner</td>
            <td>Have dinner, including rice, lentils, and vegetables.</td>
        </tr>
        <tr>
            <td>	10:30 PM 	  </td>
            <td>Bed Time</td>
            <td>Get ready for bed and go to sleep by 10:30 PM.</td>
        </tr>
       


        
    </tbody>
</table>
<p style={{margin:'5%',fontWeight:'bold'}}>Note: The schedule may be subject to change based on seasonal variations.</p>
            </div>
            <Footer/>
        </div>
    )
}
export default Schedule