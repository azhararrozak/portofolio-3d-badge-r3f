import React from "react";
import Badge from "../components/Badge";
import { ReactTyped } from "react-typed";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <div className="flex flex-col text-white h-full justify-center text-center items-center p-4 md:p-0">
          <h1 className="text-3xl md:text-6xl font-bold">
            Hello, I'm{" "}
            <ReactTyped
              className="text-blue-500"
              strings={["Azhar Arrozak"]}
              typeSpeed={120}
              loop={true}
            />
          </h1>
          <p className="text-lg md:text-2xl">I'm a full-stack developer</p>
          <a
            href="https://www.azhararrozak.my.id/"
            className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            More
            <FaSquareArrowUpRight className="ml-2" />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2 z-10 mt-8 md:mt-0">
        <Badge />
      </div>
    </div>
  );
};

export default HeroSection;
