import React from "react";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";

const Portfolio = () => {
  return (
    <section className="py-10" id="projects">
      <div>
        <h3 className="text-3xl py-1 text-center dark:text-white ">
          Portofolio
        </h3>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1  my-1 ">
          <a href="https://clone-yotube-react.netlify.app/" target="_blank">
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
          <a href="https://jamal-pokedex-react.netlify.app/">
            <Image className="object-cover rounded-xl" src={web5} />
          </a>
          <div className=" flex justify-center my-4">
            <a href="https://github.com/Jamal811/Pokedex-React">
              <button className=" flex justify-between  gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ">
                <AiOutlineGithub className=" text-2xl" />
                <span>Code</span>
              </button>
            </a>
          </div>
        </div>
        <div className="basis-1/3 flex-1  my-1">
          <a href="https://css-modules-react.netlify.app/">
            <Image className="object-cover rounded-xl" src={web6} />
          </a>
          <div className=" flex justify-center my-4">
            <a href="https://github.com/Jamal811/Learn-React/tree/CSS-Modules">
              <button className=" flex justify-between  gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ">
                <AiOutlineGithub className=" text-2xl" />
                <span>Code</span>
              </button>
            </a>
          </div>
        </div>
        <div className="basis-1/3 flex-1  my-1">
          <a href="https://react-styled-components811.netlify.app/">
            <Image className="object-cover rounded-xl" src={web7} />
          </a>
          <div className=" flex justify-center my-4">
            <a href="https://github.com/Jamal811/Learn-React/tree/Styled-Components">
              <button className=" flex justify-between  gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ">
                <AiOutlineGithub className=" text-2xl" />
                <span>Code</span>
              </button>
            </a>
          </div>
        </div>
        <div className="basis-1/3 flex-1  my-1">
          <a href="https://react1expensetracker.netlify.app/">
            <Image className="object-cover rounded-xl" src={web8} />
          </a>
          <div className=" flex justify-center my-4">
            <a href="https://github.com/Jamal811/React-Expense-Tracker">
              <button className=" flex justify-between  gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ">
                <AiOutlineGithub className=" text-2xl" />
                <span>Code</span>
              </button>
            </a>
          </div>
        </div>
        <div className="basis-1/3 flex-1  my-1">
          <a href="https://react-styled-components811.netlify.app/">
            <Image className="object-cover rounded-xl" src={web7} />
          </a>
          <div className=" flex justify-center my-4">
            <a href="https://github.com/Jamal811/Learn-React/tree/Styled-Components">
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
