import React from "react";
import { FiChevronsUp } from "react-icons/fi";
import { BiHomeSmile } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";
import { useState } from "react";
function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  let mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <nav class="flex flex-col justify-between items-center  pr-8 pb-2 pl-6  w-auto  mt-0 m-auto sticky top-0 z-0">
        <ul class="sm:flex flex-row p-2 m-auto rounded-lg  border-gray-100  space-x-8  text-font-medium border-0 bg-gray-800 dark:border-gray-700 xsm:hidden z-20">
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 rounded hover:bg-pink-500  hover:text-slate-200 text-gray-400  border-gray-700"
              title="Acerca de mí"
            >
              Acerca de
            </a>
          </li>
          <li>
            <a
              href="#conocimientos"
              class="block py-2 pr-4 pl-3 rounded hover:bg-pink-500  hover:text-slate-200 text-gray-400  border-gray-700"
              title="Conocimientos"
            >
              Conocimientos
            </a>
          </li>
          <li>
            <a
              href="#projects"
              class="block py-2 pr-4 pl-3 rounded  hover:bg-pink-500  hover:text-slate-200 text-gray-400  border-gray-700"
              title="Proyectos"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              class="block py-2 pr-4 pl-3 rounded hover:bg-pink-500  hover:text-slate-200 text-gray-400  border-gray-700"
              title="Contáctame"
            >
              Contacto
            </a>
          </li>
        </ul>
        <ul class="sm:hidden flex-row p-2 m-auto rounded-lg  border-gray-100  space-x-8  text-font-medium border-0 bg-gray-800 dark:border-gray-700 xsm:flex text-white z-20">
          <a
            href="#"
            className="block py-2 pr-4 pl-3 rounded hover:bg-pink-500  hover:text-slate-200 text-gray-400  border-gray-700 z-20"
            title="About"
          >
            <AiOutlineUser size={25} />
          </a>
          <a
            href="#conocimientos"
            className="block py-2 pr-4 pl-3 rounded hover:bg-pink-500  hover:text-slate-200 text-gray-400  border-gray-700"
            title="Conocimientos"
          >
            <BsBook size={25} />
          </a>
          <a
            href="#projects"
            className="block py-2 pr-4 pl-3 rounded hover:bg-pink-500  hover:text-slate-200 text-gray-400  border-gray-700"
            title="Proyectos"
          >
            <MdWorkOutline size={25} />
          </a>
          <a
            href="#contacto"
            className="block py-2 pr-4 pl-3 rounded hover:bg-pink-500  hover:text-slate-200 text-gray-400  border-gray-700"
            title="Contáctame"
          >
            <GoMailRead size={25} />
          </a>
        </ul>
      </nav>
      <div
        onClick={topFunction}
        className="fixed text-lg text-white bg-pink-800 rounded-full bottom-7 xsm:left-0 md:left-0 scroll-smooth"
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
