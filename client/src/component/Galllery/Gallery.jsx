import Carousel from "./Carousel";
import CommonHeader from '../CommonHeader';
import Footer from '../Home/Footer';
import img1 from './GalleryImage/img1.jpg'
import img2 from './GalleryImage/img2.jpg'
import img3 from './GalleryImage/img3.jpg'
import img4 from './GalleryImage/IMG20230815170241.jpg'
import img5 from './GalleryImage/IMG20230815170241.jpg'
import img6 from './GalleryImage/IMG20230815170241.jpg'
import img7 from './GalleryImage/IMG20230815170241.jpg'
import '../Home/Home.css'



const Gallery = () => { 
    const slides = [
    <img src={img1} alt="Slide 1" />,
    <img src={img3} alt="Slide 2"  />,
    <img src={img4} alt="Slide 3"  />,
  ];
{/*  const msgs={msg1: "Information of Image 1",msg2: "Information of Image 2",msg3: "Information of Image 3"}
  const sliders={slides,msgs}*/}


  return (
    <div >
        <CommonHeader/>
       <div className="gallery-main text-1xl"><Carousel slides={slides} /></div> 
      
      <Footer/>
    </div>
  );
};
 
export default Gallery;