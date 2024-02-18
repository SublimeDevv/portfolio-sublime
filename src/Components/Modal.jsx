import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../styles.css";

const Modal = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    // Asegúrate de que el clic proviene directamente del modal-backdrop y no de sus hijos
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick} // Manejador para cierre con clic
      onTouchEnd={handleBackdropClick} // Manejador para cierre con toque
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={"/mockups/" + image} alt={`Mockup ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Modal;
