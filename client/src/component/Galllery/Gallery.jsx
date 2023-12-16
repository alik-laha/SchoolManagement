import Carousel from "./Carousel";
import CommonHeader from '../CommonHeader';
import Footer from '../Home/Footer';
import img1 from './GalleryImage/img1.jpg'
import img3 from './GalleryImage/img3.jpg'
import img4 from './GalleryImage/IMG20230815170241.jpg'

import imgline from './GalleryImage/line.png'
import '../Home/Home.css'



const Gallery = () => { 
    const slides = [
    <img src={img1} alt="Slide 1" />,
    <img src={img3} alt="Slide 2"  />,
    <img src={img4} alt="Slide 3"  />,
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