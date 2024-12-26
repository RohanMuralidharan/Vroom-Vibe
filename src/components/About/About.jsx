import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              Welcome to Vroom Vibe, your trusted partner for finding the perfect ride. We specialize in offering a wide range of new and pre-owned vehicles to suit every budget and lifestyle. With a commitment to quality, transparency, and exceptional customer service, we aim to make your car-buying experience seamless and enjoyable. Our knowledgeable team is here to guide you through every step, ensuring you drive away in a vehicle that meets your needs and exceeds your expectations. Visit us today and discover why we’re Bangalores’s top choice for all things automotive!
              </p>
              <p data-aos="fade-up">
                get the best deals on your dream car.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
