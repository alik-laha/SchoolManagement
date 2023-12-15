import React from 'react';

import CommonHeader from '../CommonHeader';
import img1 from './GalleryImage/IMG20230912051244.png';
import Footer from '../Home/Footer';

const Gallery = (props) => {
    const images = [
        { src: {img1}, alt: 'Image 1' },
        { src: 'image2.jpg', alt: 'Image 2' },
        { src: 'image3.jpg', alt: 'Image 3' },
        { src: 'image4.jpg', alt: 'Image 4' },
        { src: 'image5.jpg', alt: 'Image 5' }
      ];
    return (
        
        <div>
            <CommonHeader/>
            <div className='gallery'>
            {images.map((image, index) => (
                <img
                 key={index}
                 className="gallery__item"
                src={image.src}
                alt={image.alt}
        />
      ))}

            </div> 
            <Footer/>
        </div>
       
      
    );
};
export default Gallery;