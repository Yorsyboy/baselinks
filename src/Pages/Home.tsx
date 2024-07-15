import Hero from "../Components/Home/Hero";
import HomeHeader from "../Components/Header/HomeHeader";
import React, { useRef } from "react";
import CoursesOffered from "../Components/Home/CoursesOffered";
import { Curve } from "../Assets/Index";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Team from "../Components/Home/Team";
import Footer from "../Components/Footer";

const HomePage = () => {
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<any>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div ref={heroRef}>
        <HomeHeader
          scrollToCourses={() => scrollToSection(coursesRef)}
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToTeam={() => scrollToSection(teamRef)}
        />
        <Hero />
      </div>
      <CoursesOffered ref={coursesRef}/>
      <section ref={aboutRef} className="relative flex flex-col lg:flex-row gap-16 justify-center text-white px-6 lg:px-24 pt-64 py-36">
        <img
          alt="curve image"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="object-cover object-top absolute inset-0 -z-10"
          src={Curve}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            color: "transparent",
          }}
        ></img>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl font-bold">Who we are ?</h2>
              <p className="mt-6 text-lg">
                Baselink Academy is an online learning platform that offers a
                wide range of courses and resources to help students and
                professionals achieve their educational goals. Our mission is to
                make learning accessible to everyone by providing high-quality
                educational content and support. Whether you are looking to
                improve your skills, advance your career, or explore new
                interests, Baselink has something for you.
              </p>
            </div>
            <div className="mt-6">
              <span className="text-2xl font-bold">Follow us on:</span>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-lg">
                  <FiFacebook />
                </a>
                <a href="#" className="text-lg">
                  <FiTwitter />
                </a>
                <a href="#" className="text-lg">
                  <FiInstagram />
                </a>
                <a href="#" className="text-lg">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-4 md:mt-0 gap-2">
            <div>
              <h2 className="text-4xl font-bold">Our Vision</h2>
              <p className="mt-6 text-lg">
                Our vision is to create a platform that provides a comprehensive
                learning experience for students and professionals alike. We aim
                to empower our users with the knowledge and tools they need to
                succeed in their educational journey.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="mt-6 text-lg">
                Our mission is to make learning accessible to everyone. We
                believe that education is the key to unlocking human potential
                and that everyone should have the opportunity to learn and grow.
                We are committed to providing high-quality educational resources
                and support to help our users achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div ref={teamRef}>
        <Team />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
