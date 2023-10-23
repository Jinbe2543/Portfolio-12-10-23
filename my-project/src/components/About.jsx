import React from "react";
import profliez from "../assets/picture/my proflie.jpg";
const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto" data-aos="zoom-in-up">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        About Me
      </h1>
      <div className="flex flex-col justify-center items-center">
        <p className="text-center py-8">
          I graduated from Generation Junior Software Developer Bootcamp and am
          looking for a software developer position. Because I wanted to change
          my career, I decided to apply for this program. In this Bootcamp, I
          developed my communication and teamwork skills. I am keen to bring my
          previous work experience and newly developed technical skills to work.
        </p>

        <div className="w-80 ">
          <img src={profliez} alt="/" className="h-auto w-full " />
        </div>
      </div>
    </div>
  );
};

export default About;
