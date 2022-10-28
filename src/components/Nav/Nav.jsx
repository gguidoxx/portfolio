import React from "react";
import { FiChevronsUp } from "react-icons/fi";
function Nav() {
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
      <nav class="flex flex-col justify-between items-center  pt-2 pr-8 pb-2 pl-6  w-auto  mt-0 m-auto ">
        <ul class="flex flex-row pt-2 pb-2 m-auto rounded-lg  border-gray-100  space-x-8  text-font-medium border-0 bg-white dark:bg-gray-800 dark:border-gray-700">
          <li>
            <a
              href="#about"
              class="block py-2 pr-4 pl-3 rounded hover:bg-pink-500  hover:text-slate-200 text-gray-400  border-gray-700"
            >
              Acerca de mi
            </a>
          </li>
          <li>
            <a
              href="#projects"
              class="block py-2 pr-4 pl-3 rounded hover:bg-pink-500  hover:text-slate-200 text-gray-400  border-gray-700"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 rounded hover:bg-pink-500  hover:text-slate-200 text-gray-400  border-gray-700"
            >
              Contacto
            </a>
          </li>
        </ul>

        <div
          onClick={topFunction}
          className="text-white fixed bottom-7 sm:right-0 md:right-6 rounded-full bg-pink-800 text-lg"
          id={"myBtn"}
        >
          <FiChevronsUp
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
          />
        </div>
      </nav>
    </>
  );
}

export default Nav;
