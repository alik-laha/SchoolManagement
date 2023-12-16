import Carousel from "./Carousel";
import CommonHeader from '../CommonHeader';
import Footer from '../Home/Footer';
import img1 from './GalleryImage/IMG20230815170241.jpg'



const Gallery = () => { 
    const slides = [
    <img src={img1} alt="Slide 1" height={300} width={300}/>,
    <img src="/images/img2.jpeg" alt="Slide 2" height={300} width={300} />,
    <img src="/images/img3.jpeg" alt="Slide 3" height={300} width={300} />
  ];
  return (
    <div className="App">
        <CommonHeader/>
        
      <Carousel slides={slides} />
      <Footer/>
    </div>
  );
};
 
export default Gallery;