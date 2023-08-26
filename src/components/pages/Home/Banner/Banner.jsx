import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../../assets/banner/banner-1.avif";
import banner2 from "../../../../assets/banner/banner-2.avif";
import banner3 from "../../../../assets/banner/banner-3.avif";
import banner4 from "../../../../assets/banner/banner-4.avif";
import banner5 from "../../../../assets/banner/banner-5.avif";
import banner6 from "../../../../assets/banner/banner-6.avif";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={banner5} />
        </div>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner3} />
        </div>
        <div>
          <img src={banner4} />
        </div>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
