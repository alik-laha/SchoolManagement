
import React from 'react';
import CommonHeader from '../CommonHeader';
import '../Home/Home.css'
import img from '../Galllery/GalleryImage/download.jpeg'

import Footer from '../Home/Footer';

const AboutUs = (props) => {
    return (
        <div>
            <CommonHeader/>
        <div className='about-us-main text-1xl'>
        <div className='about-us-introduction'>
        
<img className='about-us-responsive'src={img} alt='clg-img'></img>
Kadambagachi Al Hilal Mission has made significant strides in promoting education, culture, and social welfare since its establishment in 1999. The focus on providing modern quality education to educationally backward minority communities is crucial for uplifting and empowering those who may face challenges in accessing educational opportunities.
The fact that the organization has expanded its reach beyond the state and has successfully produced students contributing to various fields such as medicine, engineering, administration, education, and business is a testament to its impact. It's heartening to see initiatives like Al Hilal Mission making a positive difference in the lives of individuals and contributing to the development of the country through education and skill development.
As you celebrate the organization's achievements on its 25th year birthday, may it continue to flourish and make even greater strides in the years to come, furthering its mission of promoting education and social welfare. If you have any specific questions or if there's anything else you'd like to know or discuss about Al Hilal Mission, feel free to let us know!
        </div>
        
        <div className='about-us-objectives'>
        <p><b> Objectives:</b></p> <br/>
        <p><b> 1.	Education for Economic and Social Development:</b></p> <br/>
•	Prioritizing education as a catalyst for individual and societal advancement.<br/>
•	Recognizing the role of education in enhancing economic well-being and fostering social progress.<br/>
<br/><p><b>2.	Empowering Rural Scholars for Higher Education:</b></p> <br/>
•	Encouraging and supporting academically proficient students from rural areas to pursue modern higher education.<br/>
•	Emphasizing the preservation and promotion of local culture, agriculture, and heritage.<br/>
<br/><p><b>3.	Ethical and Character Development Through Education:</b></p> <br/>
•	Integrating moral and character education into the academic curriculum.<br/>
•	Emphasizing the values of truth, non-violence, and social responsibility inspired by leaders like Mahatma Gandhi.<br/>
<br/><p><b>4.	Healthcare Initiatives for Public Welfare:</b></p> <br/>
•	Establishing healthcare facilities, including medical centers and ambulance services, to enhance public health.<br/>
•	Addressing post-COVID challenges by providing educational opportunities for vulnerable and orphaned children without financial burden.<br/>
<br/><p><b>5.	Promoting Success in Competitive Examinations:</b></p> <br/>
•	Fostering a culture of academic excellence by encouraging students to excel in nationwide competitive exams.<br/>
•	Recognizing successful achievements as a stepping stone toward future educational endeavors.<br/>
<br/><p><b>6.	Encouraging Participation in Diverse Fields of Higher Education:</b></p> <br/>
•	Advocating for efforts to excel in diverse fields such as medical, engineering, and administrative positions at the national level.<br/>
•	Nurturing an environment that supports and facilitates the pursuit of higher education across various disciplines.
In summary, the outlined objectives reflect a visionary roadmap for societal development, emphasizing the pivotal role of education as a driver for economic growth, cultural preservation, ethical development, and public welfare. By addressing various facets of human development, the initiative aims to create a well-rounded and empowered society capable of meeting the challenges of the contemporary world.
<br/>
        </div>

        </div>
            <Footer/>
        </div>
       
      
    );
};
export default AboutUs;