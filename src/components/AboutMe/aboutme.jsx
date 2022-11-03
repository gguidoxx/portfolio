import React from "react";
import pureglow from "../../assets/pureglow.jpg";
import foto from "../../assets/cvfoto.jpg";
import cv from "../../assets/SVG/cv.svg";
import { motion } from "framer-motion";

import Buttons from "../Buttons/Buttons";

function Aboutme() {
  return (
    <>
      <div className="text-white xsm:animate-none ">
        <h2 class="text-pink-600 text-2xl ">¡Bienvenido a mi Portfolio!</h2>
        <div class="md:flex sm:inline sm:m-auto ">
          <motion.span class="w-96">
            ¡Hola, mi nombre es Guido Gutiérrez!
            <br></br>
            <p class="">
              <br></br>
              🖥Soy un apasionado de la programación y del trabajo en equipo,
              vivo en Mendoza, Argentina y tengo 21 años. Actualmente soy
              desarrollador web full stack, y me gusta aprender cosas nuevas
              cada vez que puedo.
            </p>{" "}
            <br class="xsm:hidden md:flex" />
            <br class="xsm:hidden md:flex" />
            <br class="xsm:hidden md:flex" />
            <br class="xsm:hidden md:flex" />
            <br className="md:hidden" />
            <h3 className="text-lg text-gray-200 xsm:hidden md:flex">
              ¡No dudes en contactarme!
            </h3>
          </motion.span>
          <div class="max-h-xs m-auto md:mr-16 xsm:m-auto">
            <motion.img
              whileHover={{
                scale: 1.8,
                translateX: "-23vw",
                translateY: "25vh",
                borderRadius: 0,
              }}
              transition={{ duration: 1 }}
              src={foto}
              class="max-w-xs max-h-xs h-xs md:rounded-full sm:rounded-none xsm:m-auto "
            />
            <p className="max-w-xs text-lg text-center max-h-xs h-xs md:rounded-full sm:rounded-none xsm:m-auto md:hidden">
              ¡No dudes en contactarme!
            </p>
          </div>
        </div>
      </div>
      <hr class="border-personalized-600" id="conocimientos" />
      <br />
      <br />
    </>
  );
}

export default Aboutme;
