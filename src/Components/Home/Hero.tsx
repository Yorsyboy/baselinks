import { Intro } from "../../Assets/Index";
import React from "react";

const Hero = () => {
  return (
    <div className="">
      <video
      autoPlay
      loop
      muted
      className="absolute inset-0 object-cover object-center w-full h-full"
      >
      <source src={Intro} type="video/mp4" />
      </video>
      <section className="py-10 sm:py-16 lg:py-6 z-10 relative">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-lmsPrimary sm:text-5xl lg:text-6xl">
          Best Online Education Platform
          </h1>
          <p className="mt-8 text-base text-lmsPrimary sm:text-xl">
          Your Gateway to Knowledge and Growth. Discover a world of
          comprehensive learning resources, expert guidance, and
          innovative tools designed to empower students and professionals
          alike on their educational journey.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
          className="w-[70%]"
          src="https://freepngimg.com/thumb/girl/168680-woman-young-free-clipart-hd.png"
          alt=""
          />
        </div>
        </div>
      </div>
      </section>
    </div>
    );
};

export default Hero;
