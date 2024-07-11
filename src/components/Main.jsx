// import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main">
      <img
      // src="/public/colour.jpg"
      // alt="stars"
      // className="w-full h-screen object-cover"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="max-w-[75%] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Chris Collis
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-blue-300">
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Creative",
                1000,
                "Continuously learning",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[20%] space-x-1 w-full text-gray-800">
            <FaLinkedin size={30} />
            <FaGithub size={30} />
            <FaInstagram size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
