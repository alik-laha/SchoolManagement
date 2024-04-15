import Carousel from "./Carousel";
import CommonHeader from "../CommonHeader";
import Footer from "../Home/Footer";
import img1 from "./GalleryImage/img1.jpg";
import img3 from "./GalleryImage/img3.jpg";
import img4 from "./GalleryImage/img4.jpg";
import img5 from "./GalleryImage/img5.jpg";
import img6 from "./GalleryImage/img6.jpeg";

import img8 from "./GalleryImage/img8.jpeg";
import img9 from "./GalleryImage/img9.jpeg";
import img10 from "./GalleryImage/img10.jpeg";
import img11 from "./GalleryImage/img11.jpeg";
import img12 from "./GalleryImage/img12.jpg";

import imgline from "./GalleryImage/line.png";
import "../Home/Home.css";

const Gallery = () => {
  const texts = [
    "statement 1",
    "statement 2",
    "statement 3",
    "statement 4",
    "statement 5",
    "statement 6",
    "statement 7",
    "statement 8",
    "statement 9",
    "statement 10",
  ];
  const slides = [
    img1,img3,img4,img5,img6,img8,img9,img10,img11,img12
  ];

  return (
    <div>
      <CommonHeader />
      <div className="gallery-line">
        <p>Image Galleries</p>
        <img src={imgline} alt="Line Image" />
      </div>
      <div className="gallery-main text-1xl">
        <Carousel slides={slides} Texts={texts} />
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
