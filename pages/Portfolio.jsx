import React from "react";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

const Portfolio = () => {
  return (
    <section className="py-10" id="projects">
      <div>
        <h3 className="text-3xl py-1 text-center dark:text-white ">
          Portofolio
        </h3>
        {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products
          for both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p> */}
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1  my-1 ">
          <a
            href="https://visionary-daffodil-182c7c.netlify.app/"
            target="_blank"
          >
            <Image className="object-cover rounded-xl" src={web1} />
          </a>
          <div className=" flex justify-center my-4">
            <a
              href="https://github.com/Jamal811/project_youtube_clone_JsMastry"
              target="_blank"
            >
              <button className=" flex justify-between  gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ">
                <AiOutlineGithub className=" text-2xl" />
                <span>Code</span>
              </button>
            </a>
          </div>
        </div>
        <div className="basis-1/3 flex-1  my-1">
          <a href="https://dazzling-puffpuff-439879.netlify.app/">
            <Image className="object-cover rounded-xl" src={web2} />
          </a>
          <div className=" flex justify-center my-4">
            <a href="https://github.com/Jamal811/covid19-tracker">
              <button className=" flex justify-between  gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ">
                <AiOutlineGithub className=" text-2xl" />
                <span>Code</span>
              </button>
            </a>
          </div>
        </div>
        <div className="basis-1/3 flex-1  my-1">
          <a href="https://sprightly-sundae-6ac01f.netlify.app/">
            <Image className="object-cover rounded-xl" src={web3} />
          </a>
          <div className=" flex justify-center my-4">
            <a href="https://github.com/Jamal811/Raect-App-TextUtils">
              <button className=" flex justify-between  gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ">
                <AiOutlineGithub className=" text-2xl" />
                <span>Code</span>
              </button>
            </a>
          </div>
        </div>
        <div className="basis-1/3 flex-1  my-1">
          <a href="">
            <Image className="object-cover rounded-xl" src={web4} />
          </a>
          <div className=" flex justify-center my-4">
            <a href="https://github.com/Jamal811/React-Function-Based-News-App">
              <button className=" flex justify-between  gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ">
                <AiOutlineGithub className=" text-2xl" />
                <span>Code</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
