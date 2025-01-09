import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "../../DashBoard.css";
// import "@coreui/coreui/dist/css/coreui.min.css";
import Carouselimg1 from "../../../assests/images/carousleimg1.jpeg";
// import Carouselimg2 from "../../../assests/images/carousleimg2.avif";
// import Carouselimg3 from "../../../assests/images/carousleimg3.avif";

const Carousel = () => {
  return (
    <div style={{ height: "200px" }}>
      <CCarousel controls>
        <CCarouselItem>
          <CImage className="d-block w-100" src={Carouselimg1} alt="slide 1" />
        </CCarouselItem>
        {/* <CCarouselItem>
          <CImage className="d-block w-100" src={Carouselimg2} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={Carouselimg3} alt="slide 3" />
        </CCarouselItem> */}
      </CCarousel>
    </div>
  );
};

export default Carousel;
