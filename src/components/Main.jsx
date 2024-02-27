import React from "react";
import profil from "../assets/img/profil.png";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="bg-[#1b0937] w-full flex justify-center ">
      <div className=''>
      <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
        <h1 className="text-white sm:text-5xl text-4xl font-bold ">Hi, I'm Marietta Odile</h1>
        <h2 className="text-white flex sm:text-3xl text-2xl">
          I'm a
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Frontend Web Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Creative Developer",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            speed={50}
            style={{ fontSize: "1em", display: "inline-block", paddingLeft: "5px", color: "white" }}
            repeat={Infinity}
          />
        </h2>
        <div className="text-white flex justify-between pt-6 max-w-[200px] w-full">
          <FaFacebookF className="cursor-pointer" size={20} href="https://web.facebook.com/jessica.dial.581"/>
          <FaInstagram className="cursor-pointer" size={20} href="https://www.instagram.com/marietta_odile/" />
          <FaLinkedinIn className="cursor-pointer" size={20} href="https://www.linkedin.com/in/paquerette-onjaniaina-marietta-odile-renee-03028719a/"/>
        </div>
      </div>
      </div>   
      {/* <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 absolute top-1/2 transform -translate-y-1/2"> */}
      <div className=" overflow-hidden">
        <img className='w-full h-screen object-contain' src={profil}/>
        </div>   
    </div>
  );
};

export default Main;
