import React from "react";
import pureglow from "../../assets/pureglow.jpg";
import calculadorareact from "../../assets/calculadorareact.jpg";
import todoapp from "../../assets/todoapp.jpg";
import notiapp from "../../assets/notiapp.jpg";


import Buttons from "../Buttons/Buttons";
function Cards() {
  const cards = [
    {
      title: "Pure Glow",
      desc: "Un proyecto e-commerce, consta de una tienda de maquillajes, con pasarela de pagos, carro de compras, logueo con google, registro y dashboard de administrador",
      img: pureglow,
      linkGit: "https://github.com/julietajimenez/PF-henry-grupo18",
      linkLive: "https://pureglow.vercel.app/",
      video: "https://www.youtube.com/watch?v=RARi-UcgWDA",
    },
    {
      title: "Calculadora",
      desc: "Una calculadora hecha con React, primer proyecto realizado en el aprendizaje de React con el curso de FreeCodeCamp",
      img: calculadorareact,
      linkGit: "https://github.com/gguidoxx/Calculadora-React",
      linkLive: "https://calculadora-react-vert.vercel.app/",
    },
    {
      //ESTÁ ÚNICAMENTE DE RELLENO, EL PORTFOLIO NO DEBERÍA IR ACÁ
      title: "ToDo App",
      desc: "TodoApp: Una página simple, con funcionalidad de una lista de tareas. Hecha para practicar React de un nivel básico.",
      img: todoapp,
      linkGit: "https://github.com/gguidoxx/todoapp",
      linkLive: "https://gtodoapp.vercel.app/",
    },
    {
      //ESTÁ ÚNICAMENTE DE RELLENO, EL PORTFOLIO NO DEBERÍA IR ACÁ
      title: "Noticias App",
      desc: "NoticiasApp: Desarrollada con React, Redux, Express y PostgreSQL. Una página simple, desarrollo de práctica para trabajar con peticiones, apis y desarrollar CRUD. ",
      img: notiapp,
      linkGit: "https://github.com/gguidoxx/newspaper",
      linkLive: "https://notiapp.vercel.app/",
    },
  ];
  return (
    <section className="pb-24 select-text">
      <h1 className="pt-12 pb-12 text-3xl leading-loose text-center text-blue-50 ">
        Mis proyectos
      </h1>

      <div className="grid gap-20 md:grid-cols-1 sm:grid-cols-1 sm:grid-rows-1 lg:grid-cols-2 xl:grid-cols-3 ">
        {cards.map((e) => (
          <div
            id={e.title}
            className="h-full max-w-full m-auto border-2 border-pink-500 rounded-md bg-slate-200 min-w-min hover:bg-slate-400"
          >
            <div className="h-max w-max">
              <div className="rounded-2xl">
                <img
                  src={e.img}
                  alt="Pic1"
                  className="min-h-full m-auto rounded-sm rounded-b-none lg:h-full lg:max-w-sm w-80"
                />
              </div>
              <br />

              <h3 className="max-w-full m-auto ml-1 text-3xl underline">
                {e.title}
              </h3>
              <br />
              <h5 className="flex-wrap max-w-xs m-auto ml-1">{e.desc}</h5>
            </div>
            <Buttons linkGit={e.linkGit} linkLive={e.linkLive} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
