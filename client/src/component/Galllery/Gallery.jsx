import Carousel from "./Carousel";
import CommonHeader from '../CommonHeader';
import Footer from '../Home/Footer';
import img1 from './GalleryImage/img1.jpg'
import img3 from './GalleryImage/img3.jpg'
import img4 from './GalleryImage/img4.jpg'
import img5 from './GalleryImage/img5.jpg'
import img6 from './GalleryImage/img6.jpeg'

import img8 from './GalleryImage/img8.jpeg'
import img9 from './GalleryImage/img9.jpeg'
import img10 from './GalleryImage/img10.jpeg'
import img11 from './GalleryImage/img11.jpeg'
import img12 from './GalleryImage/img12.jpg'




import imgline from './GalleryImage/line.png'
import '../Home/Home.css'



const Gallery = () => { 
    const slides = [
    <img src={img1} alt="Slide 1" />,
    <img src={img3} alt="Slide 3"  />,
    <img src={img4} alt="Slide 4"  />,
    <img src={img5} alt="Slide 5"  />,
    <img src={img6} alt="Slide 6"  />,
    
    <img src={img8} alt="Slide 8"  />,
    <img src={img9} alt="Slide 9"  />,
    <img src={img10} alt="Slide 10"  />,
    <img src={img11} alt="Slide 11"  />,
    <img src={img12} alt="Slide 12"  />,
    
  ];

  return (
    <div >
        <CommonHeader/>
        <div className="gallery-line"> 
          <p>Image Galleries</p><img src={imgline} alt="Line Image" />
        </div>
       <div className="gallery-main text-1xl">
       <Carousel slides={slides} /></div> 
      
      <Footer/>
    </div>
  );
};
 
export default Gallery;