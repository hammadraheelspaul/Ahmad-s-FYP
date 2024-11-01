import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ecommercePic, technologyPic, artsPic, abc, arts } from "../assets";
import { logo } from "../assets/";

const Hero = () => {
  return (
    <div className="relative bg-white mt-2 text-white h-screen w-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-40">
        <img src={logo} className="w-32 mb-4 mx-auto" alt="Leep" />
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
          Take a <span className="text-green-600 uppercase">Leep</span> towards
          your dreams!
        </h1>
        <div className="uppercase text-green-600 text-3xl md:text-5xl font-semibold mb-8">
          <span className="text-white">Fund Where it Matters!</span>
          <br />
          <TypeAnimation
            sequence={[
              "Art",
              1000, // Increase the duration for a slower animation
              "Tech & Innovation",
              1000,
              "Video Games",
              1000,
              "Education",
              1000,
              "Comics",
              1000,
              "Environment",
              1000,
              "Human Rights",
              1000,
            ]}
            wrapper="span"
            speed={1}
            repeat={Infinity}
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          transitionTime={1000}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer focus:outline-none"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  border: "none",
                }}
              >
                <span className="text-white text-2xl">&#8249;</span>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer focus:outline-none"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  border: "none",
                }}
              >
                <span className="text-white text-3xl p-3 rounded">&#8250;</span>
              </button>
            )
          }
        >
          <div>
            <img
              src={abc}
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
              alt="Carousel Image 1"
            />
          </div>
          <div>
            <img
              src={arts}
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
              alt="Carousel Image 2"
            />
          </div>
          <div>
            <img
              src={abc}
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
              alt="Carousel Image 3"
            />
          </div>
          {/* Add more slides as needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
