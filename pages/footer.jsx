import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="">
      <div className=" mb-4 bg-gradient-to-r from-cyan-500 text- to-teal-500 px-4 py-2 border-none rounded-md ">
        <div className="text-md py-2 leading-8">
          <ul className=" flex justify-center gap-8 text-white">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a href="#projects">Portfolio</a>
            </li>
          </ul>
        </div>
        <div className=" text-3xl flex justify-center gap-6 py-3  dark: text-black">
          <a
            href="https://twitter.com/Jamalshah811?t=d3Ul0ZjSynnEhj2LHdj7Hw&s=09"
            target="_blank"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="https://www.linkedin.com/in/jamal-shah-0068b91a8"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Jamal811" target="_blank">
            <AiOutlineGithub />
          </a>
        </div>
        <h5 className="text-center py-3 pb-3  text-white">
          2023 &#169; JS Portfolio, All rights received.
        </h5>
      </div>
    </section>
  );
};

export default Footer;
