import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text5xl text-4xl font-bold text-gray-800">
            I'm Wuttipat Uthasing
          </h1>
          <h2 className="flex smtext-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Software Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "Junior Software ?",
                2000,
              ]}
              wrapper="div"
              speed={50}
              //   style={{ fontSize: '2em', display: 'inline-block' }}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
          <a href="https://github.com/Jinbe2543?tab=repositories" target="_blank"><FaGithub className="cursor-pointer" size={20} /></a>
            <a href="https://www.facebook.com/kamen.rider.7370013" target="_blank"><FaFacebookF className="cursor-pointer" size={20} /></a>
            <a href="https://www.instagram.com/wuttipat.opor?fbclid=IwAR2LZTIYfkXjpcAyAdch1EIrQ9Rfjo4BaR3M9MaUNKyei2OvDfU03w7Wuq8" target="_blank"><FaInstagram className="cursor-pointer" size={20} /></a>
            <a href="https://www.linkedin.com/in/wuttipat-u" target="_blank"><FaLinkedinIn className="cursor-pointer" size={20} /></a>
          </div>
          <div className="py-3">
            <button className="text-xl bg-[#001b5e] text-white p-3 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
              <a
                href="https://drive.google.com/file/d/1VpY7aVTwSl5ybonxvakmhelbw_14_bi3/view?usp=sharing"
                target="blank"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
