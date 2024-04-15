import "./header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Body } from "../body/Body";

const Header = () => {
  const handleSlideChange = () => {
    // Agrega una clase al texto para aplicar la animación
    const textElement = document.querySelector(".animated-text");
    textElement.classList.add("slide-in-up");
  };

  return (
    <>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1} // Muestra solo una imagen a la vez
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={handleSlideChange}
      autoplay={{ delay: 4000 }}
    >
      <SwiperSlide>
        <div className="container-header">
          <div className="image-overlay">
            <img
              src="/header/depositphotos_3554179-stock-photo-shopping-in-a-causal-clothing.jpg"
              alt=""
              className="header-image"
            />
            <div className="container-parrafo">
                <p>¿Tienes alguna idea de diseño ?</p>
            </div>{" "}
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="container-header">
          <div className="image-overlay">
            <img src="/header/5480.jpg" alt="" className="header-image" />
            <div className="container-parrafo">
            <p>¿Tienes alguna idea de diseño ?</p>
            </div>{" "}
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="container-header">
          <div className="image-overlay">
            <img src="./header/6298.jpg" alt="" className="header-image" />
            <div className="container-parrafo">
            <p>¿Tienes alguna idea de diseño ?</p>
            </div>{" "}
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="container-header">
          <div className="image-overlay">
            <img
              src="/header/ropa-ba-ropa-gimnasio-deporte.jpg"
              alt=""
              className="header-image"
            />
            <div className="container-parrafo">
            <p>¿Tienes alguna idea de diseño ?</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* Agrega más imágenes según sea necesario */}
    </Swiper>
    <Body/>

    </>
  );
};

export default Header;
