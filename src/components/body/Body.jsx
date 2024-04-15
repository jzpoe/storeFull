import "./body.css";
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

export const Body = () => {
  return (
    <div className="container-body">
      <div className="contenido1">
        <div className="card">
          <h2>Haz justo lo que tu imaginación desee</h2>
          <div className="container-p-body">
            <p>encuentra la ropa a tu estilo</p>
          </div>
          <div>
            <Swiper className="container-body-swiper"
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1} // Muestra solo una imagen a la vez
              navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              autoplay={{ delay: 4000 }}
            >
              <SwiperSlide>
                <div>
                  <div className="container-swiper-body">
                    <img
                      src="/header/depositphotos_3554179-stock-photo-shopping-in-a-causal-clothing.jpg"
                      alt=""
                      className="body-image"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <div className="image-overlay">
                    <img src="/header/5480.jpg" alt="" className="body-image" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <div className="image-overlay">
                    <img
                      src="./header/6298.jpg"
                      alt=""
                      className="body-image"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <div>
                    <img
                      src="/header/ropa-ba-ropa-gimnasio-deporte.jpg"
                      alt=""
                      className="body-image"
                    />
                  </div>
                </div>
              </SwiperSlide>
              {/* Agrega más imágenes según sea necesario */}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="contenido2">
        <img src="/body/niña-asiatica-modelo.png" alt="niña-asiatica-modelo" />
      </div>
    </div>
  );
};
