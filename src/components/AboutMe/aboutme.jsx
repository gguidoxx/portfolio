import React from "react";
import pureglow from "../../assets/pureglow.jpg";

function Aboutme() {
  const cards = [
    {
      title: "Pure Glow",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dicta. Animi nihil nesciunt minima, eos odit amet reiciendis. Sint nesciunt iusto nemo pariatur itaque, dolorem obcaecati! Quibusdam expedita eos ipsum.",
      img: pureglow,
      linkGit: "https://github.com/julietajimenez/PF-henry-grupo18",
      linkLive: "https://pf-henry-ecommerce.vercel.app/",
      video: "https://www.youtube.com/watch?v=RARi-UcgWDA",
    },
    {
      title: "Pure Glow",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dicta. Animi nihil nesciunt minima, eos odit amet reiciendis.",
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
      <h1 className="text-lg text-center">Mis proyectos</h1>
      <br></br>
      <div className="md:grid-cols-2 sm:grid-cols-1 grid gap-20 sm:grid-rows-1 lg:grid-cols-2 xl:grid-cols-3 ">
        {cards.map((e) => (
          <div
            id={e.title}
            className="bg-slate-200 rounded-md max-w-full min-w-min m-auto w-auto hover:bg-transparent h-full border-2 divide-x-2 border-red-300 "
          >
            <div className="h-max w-max">
              <div className="rounded-3xl">
                <img
                  src={e.img}
                  alt="Pic1"
                  className="lg:h-full lg:max-w-sm w-96 rounded-md rounded-b-none m-auto "
                />
              </div>
              <br />
              <h3 className="ml-1 m-auto max-w-full text-3xl">{e.title}</h3>
              <h5 className="ml-1 m-auto flex-wrap max-w-xs">{e.desc}</h5>
              <div className="flex ml-1 m-auto pb-1 gap-1 pt-9">
                <a href={e.linkGit} target="_blank">
                  <button class="bg-transparent hover:bg-black font-semibold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded text-slate-900 active:bg-slate-600">
                    Proyecto Github
                  </button>
                </a>

                <a href={e.linkLive} target="_blank">
                  <button class="bg-transparent hover:bg-green-600 font-semibold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded text-slate-900 active:bg-slate-600">
                    Página web
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Aboutme;
