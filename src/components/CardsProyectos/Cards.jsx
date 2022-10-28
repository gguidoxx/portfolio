import React from "react";
import pureglow from "../../assets/pureglow.jpg";
import calculadorareact from "../../assets/calculadorareact.jpg"
import portfolio from "../../assets/portfolio.jpg"



import Buttons from "../Buttons/Buttons";
function Cards() {
  const cards = [
    {
      title: "Pure Glow",
      desc: "Un proyecto e-commerce, consta de una tienda de maquillajes, con pasarela de pagos, carro de compras, logueo con google, registro y dashboard de administrador",
      img: pureglow,
      linkGit: "https://github.com/julietajimenez/PF-henry-grupo18",
      linkLive: "https://pf-henry-ecommerce.vercel.app/",
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
      title: "Portfolio",
      desc: "Un portfolio que fue puesto de relleno para ver como quedaría con proyectos reales, acá iría otro a futuro.",
      img: portfolio,
      linkGit: "https://github.com/gguidoxx/portfolio",
      linkLive: "https://guido-gutierrez-portfolio.vercel.app/",

    },
    {
      title: "Pure Glow",
      desc: "Un e-commerce de cosméticos centrados en maquillaje.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqVFpz0W7-EzJesRsVcZfY7LoP-w2f4K_CQ&usqp=CAU",
    },
    {
      title: "Pure Glow",
      desc: "Un e-commerce de cosméticos centrados en maquillaje.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqVFpz0W7-EzJesRsVcZfY7LoP-w2f4K_CQ&usqp=CAU",
    },
    {
      title: "Pure Glow",
      desc: "Un e-commerce de cosméticos centrados en maquillaje.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqVFpz0W7-EzJesRsVcZfY7LoP-w2f4K_CQ&usqp=CAU",
    },
  ];
  return (
    <section id="projects">
      <h1 className="leading-loose text-3xl text-center text-blue-50">
        Mis proyectos
      </h1>
      <br></br>
      <div className="md:grid-cols-2  sm:grid-cols-1 grid gap-20 sm:grid-rows-1 lg:grid-cols-2 xl:grid-cols-3 ">
        {cards.map((e) => (
          <div
            id={e.title}
            className=" bg-slate-100 rounded-md max-w-full min-w-min m-auto w-auto hover:bg-slate-300 h-full "
          >
            <div className="h-max w-max">
              <div className="rounded-2xl">
                <img
                  src={e.img}
                  alt="Pic1"
                  className=" min-h-full lg:h-full lg:max-w-sm w-96 rounded-sm rounded-b-none m-auto"
                />
              </div>
              <br />

              <h3 className="ml-1 m-auto max-w-full text-3xl underline">
                {e.title}
              </h3>
              <br />
              <h5 className="ml-1 m-auto flex-wrap max-w-xs">{e.desc}</h5>
            </div>
            <Buttons linkGit={e.linkGit} linkLive={e.linkLive} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
