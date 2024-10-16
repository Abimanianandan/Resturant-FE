import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselPage = () => {
  return (
    <div>
      <Carousel className="mt-sm--5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px", borderRadius: "50px" }}
            src="https://w0.peakpx.com/wallpaper/776/861/HD-wallpaper-hamburger-flames-fast-food-food.jpg"
          />
          <Carousel.Caption>
            <h3 className="fw-bold">50% Offer..🤩</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px", borderRadius: "50px" }}
            src="https://img.freepik.com/premium-photo/ice-cream-instagram-poster-design_1020200-18864.jpg?uid=R125703567&ga=GA1.1.721586160.1725420279&semt=ais_hybrid"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px", borderRadius: "50px" }}
            src="https://w0.peakpx.com/wallpaper/467/393/HD-wallpaper-food-dessert-still-life.jpg"
            alt="Delicious dish 3"
          />
          <Carousel.Caption>
            <h3 className="fw-bold">30% Offer..⚡😍</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
