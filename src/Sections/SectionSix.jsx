import React, { useState } from "react";

export const SectionSix = () => {
  const [carouselVisible, setCarouselVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/six-image-one.jpg", "/six-image-two.jpg"];

  const toggleCarousel = () => {
    setCarouselVisible(!carouselVisible);
    setCurrentIndex(0); // Reset index when opening carousel
  };

  const hideCarousel = () => {
    setCarouselVisible(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="section six">
      <div className="six-layover">
        <img className="bk-triangle" src="/ctrianglebig.svg" />
        <img className="bk-heart" src="/fsüda.svg" />

        <div className="six-text-align">
          <p className="six-main-text">
            Al final de la cita, Santi le confesó a Alex que<span className="text-red"> no<br/> podían contárselo a nadie</span>. Explicó que tenía una<br/> reputación que mantener y quería evitar dramas<br/> con sus seguidores y patrocinadores. Eran "asuntos<br/> de adultos", así que le pidió madurez a Alex.
          </p>
          <div className="pop-up-six" onClick={toggleCarousel}>
            <img className="pop-up-image" src="/flag.svg" />
            <h1>Manipulación</h1>
          </div>
        </div>

        {carouselVisible && (
          <div className="carousel-wrapper">
            <div className="five-image-carousel">
              <img
                className="five-image-carousel-content"
                src={images[currentIndex]} // Display current image based on currentIndex
                alt={`Image ${currentIndex + 1}`}
              />
                              <button className="prev-button" onClick={prevImage}>
                    <i class="fa-solid fa-arrow-left" style={{ fontSize: "50px", color: "#321e40" }} ></i>
                </button>
                <button className="next-button" onClick={nextImage}>
                    <i class="fa-solid fa-arrow-right" style={{ fontSize: "50px", color: "#321e40" }} ></i>
                </button>
            </div>
                <button className="back-button-carousel" onClick={hideCarousel}>
                    Volver
                </button>
          </div>
        )}
      </div>
    </section>
  );
};