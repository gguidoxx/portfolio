import React from "react";
import { FiChevronsUp } from "react-icons/fi";
import { BiDownload } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";
import { useState } from "react";
import cv from "../../assets/cv.pdf";
import cv2 from "../../assets/SVG/cvnew.svg";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <nav class="flex flex-col justify-between items-center  pr-0 pb-2 pl-0 w-auto m-auto sticky top-0 z-0">
        <ul class="lg:flex flex-row p-2 m-auto  w-auto  space-x-8  text-font-medium border-0 bg-gray-800 border-gray-700 xsm:hidden z-20">
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 rounded  hover:text-lime-400  text-gray-400  border-gray-700"
              title="Acerca de mí"
            >
              Acerca de
            </a>
          </li>
          <li>
            <a
              href="#conocimientos"
              class="block py-2 pr-4 pl-3 rounded  hover:text-lime-400 text-gray-400  border-gray-700"
              title="Conocimientos"
            >
              Conocimientos
            </a>
          </li>
          <li>
            <a
              href="#projects"
              class="block py-2 pr-4 pl-3 rounded   hover:text-lime-400 text-gray-400  border-gray-700"
              title="Proyectos"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              class="block py-2 pr-4 pl-3 rounded  hover:text-lime-400 text-gray-400  border-gray-700"
              title="Contáctame"
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href={cv}
              class="block py-2 pr-4 pl-3 rounded  hover:text-lime-400 text-gray-400  border-gray-700"
              title="Descargar CV"
              download
            >
              Descargar CV
            </a>
          </li>
        </ul>
        <div class="lg:hidden flex-row justify-around  p-4 -mt-1 w-full border-gray-100 space-x-8  text-font-medium border-0 bg-gray-800 dark:border-gray-700 xsm:flex text-white z-20 ">
          <a
            href="#"
            className="z-20 block w-0 text-gray-400 border-gray-700 rounded hover:text-lime-400"
            title="About"
          >
            <AiOutlineUser size={25} />
          </a>

          <a
            href="#conocimientos"
            className="block w-0 text-gray-400 border-gray-700 rounded hover:text-lime-400"
            title="Conocimientos"
          >
            <BsBook size={25} />
          </a>
          <a
            href="#projects"
            className="block w-0 text-gray-400 border-gray-700 rounded hover:text-lime-400"
            title="Proyectos"
          >
            <MdWorkOutline size={25} />
          </a>
          <a
            href="#contacto"
            className="block w-0 text-gray-400 border-gray-700 rounded hover:text-lime-400 "
            title="Contáctame"
          >
            <GoMailRead size={25} />
          </a>
          <a
            href={cv}
            download
            className="flex w-0 text-gray-400 border-gray-700 rounded hover:text-lime-400 "
          >
            <p>CV</p>
            <BiDownload size={25} />
          </a>
        </div>
      </nav>
      <div
        onClick={topFunction}
        className="fixed text-lg text-white bg-pink-800 rounded-full bottom-7 xsm:left-1 md:left-7 scroll-smooth"
        id={"myBtn"}
      >
        <FiChevronsUp
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          title="Ir arriba"
        />
      </div>
    </>
  );
}

export default Nav;
