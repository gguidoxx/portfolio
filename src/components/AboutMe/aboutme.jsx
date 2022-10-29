import React from "react";
import pureglow from "../../assets/pureglow.jpg";
import foto from "../../assets/cvfoto.jpg";

import Buttons from "../Buttons/Buttons";

function Aboutme() {
  return (
    <>
      <div className="text-white md:animate-bounce-slow xsm:animate-none">
        <h2 class="text-pink-600 text-2xl ">¡Bienvenido a mi Portfolio!</h2>
        <div class="md:flex sm:inline sm:m-auto ">
          <span class="w-96">
            ¡Hola, mi nombre es Guido Gutiérrez!
            <br></br>
            <span class="p-5">
              <br></br>
              🖥Soy un apasionado de la programación y del trabajo en equipo,
              vivo en Mendoza, Argentina y tengo 21 años. Actualmente soy
              desarrollador web full stack, y me gusta aprender cosas nuevas
              cada vez que puedo.
            </span>{" "}
            <br />
            <br />
            <br />
            <br />
            <span className="text-lg">¡No dudes en contactarme!</span>
          </span>
          <div class="max-h-xs m-auto md:mr-16 sm:m-auto">
            <img
              src={foto}
              class="max-w-xs max-h-xs h-xs md:rounded-full sm:rounded-none xsm:m-auto"
            />
          </div>
        </div>
      </div>
      <hr class="border-personalized-600" />
      <br />
      <br />
    </>
  );
}

export default Aboutme;
