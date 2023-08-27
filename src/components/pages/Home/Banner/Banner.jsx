import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../../assets/banner/banner-1.avif";
import banner2 from "../../../../assets/banner/banner-2.avif";
import banner4 from "../../../../assets/banner/banner-4.avif";
import banner5 from "../../../../assets/banner/banner-5.avif";
import "./BannerCss/BannerStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner-area">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
