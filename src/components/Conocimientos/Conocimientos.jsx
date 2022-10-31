import React from "react";
import css3 from "../../assets/SVG/css3.svg";
import html from "../../assets/SVG/html.svg";
import js from "../../assets/SVG/js.svg";
import nodejs from "../../assets/SVG/nodejs.svg";
import pg from "../../assets/SVG/pg.svg";
import react from "../../assets/SVG/react.svg";
import redux from "../../assets/SVG/redux.svg";
import sequelize from "../../assets/SVG/sequelize.svg";
import tailwind from "../../assets/SVG/tailwind.svg";

function Conocimientos() {
  const imagenes = [
    css3,
    html,
    js,
    nodejs,
    pg,
    react,
    redux,
    sequelize,
    tailwind,
  ];
  return (
    <>
      <div className="text-white">
        <h1 className="text-3xl leading-loose text-center text-blue-50">
          Conocimientos
        </h1>
        <br />
        <br />

        <div class="grid sm:grid-cols-2 xsm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xsm:ml-10 sm:ml-24 xl:ml-48 gap-9 ">
          {imagenes.map((e) => (
            <img src={e} class="sm:max-h-xxs  xsm:max-h-xxxs "></img>
          ))}
        </div>
        <br />
      <br />
        <hr class="border-personalized-600"  id="projects" />
        <br />
      <br />
      </div>
    </>
  );
}

export default Conocimientos;
