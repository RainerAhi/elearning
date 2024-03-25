import React, { useState } from "react";

export const SectionFive = () => {
  const [carouselVisible, setCarouselVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the index of the current image
  const images = ["/five-image-one.png", "/five-image-two.png", "/five-image-three.png", "/five-image-four.png", "/five-image-five.png", "/five-image-six.png", "/five-image-seven.png"]; // Array of image URLs

  const toggleCarousel = () => {
    setCarouselVisible(!carouselVisible);
    setCurrentIndex(0); // Reset index when opening carousel
  };

  const hideCarousel = () => {
    setCarouselVisible(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to the next image cyclically
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Move to the previous image cyclically
  };

  return (
    <section className="section five">
      <div className="five-layover">
        <img className="bk-bench" src="/bench.svg" />
        <img className="bk-road" src="/roadwalk.svg" />
        <img className="bk-grass" src="/grass.svg" />

        <div className="five-text-align">
          <p className="five-main-text">
            Cuando se vieron,<span className="five-color"> Santi
            <br /> le dijo a Alex que le<br /> gustaba un montón.</span>
            <br /> Incluso le resaltó la<br /> madurez pese a su edad
          </p>
          <div className="pop-up-five" onClick={toggleCarousel}>
            <img className="pop-up-image" src="/flag.svg" />
            <h1>Relación impropia</h1>
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