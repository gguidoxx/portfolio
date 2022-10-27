import React from "react";
import github from "../../assets/github.png";

function Aboutme() {
  const cards = [
    {
      id: 1,
      title: "Pure Glow",
      desc: "Un e-commerce de cosméticos centrados en maquillaje.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqVFpz0W7-EzJesRsVcZfY7LoP-w2f4K_CQ&usqp=CAU",
    },
    {
      id: 1,
      title: "Pure Glow",
      desc: "Un e-commerce de cosméticos centrados en maquillaje.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqVFpz0W7-EzJesRsVcZfY7LoP-w2f4K_CQ&usqp=CAU",
    },
    {
      id: 1,
      title: "Pure Glow",
      desc: "Un e-commerce de cosméticos centrados en maquillaje.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqVFpz0W7-EzJesRsVcZfY7LoP-w2f4K_CQ&usqp=CAU",
    },
    {
      id: 1,
      title: "Pure Glow",
      desc: "Un e-commerce de cosméticos centrados en maquillaje.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqVFpz0W7-EzJesRsVcZfY7LoP-w2f4K_CQ&usqp=CAU",
    },
  ];
  return (
    <div className="lg:grid-cols-3 sm:grid-cols-2 grid gap-20 sm:grid-rows-1">
      {cards.map((e) => (
        <article className="border-2 rounded-md max-w-s m-auto">
          <div className="portfolio__items-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqVFpz0W7-EzJesRsVcZfY7LoP-w2f4K_CQ&usqp=CAU"
              alt="Pic1"
            />
          </div>
          <h3 className="m-auto">Titulo</h3>
          <h5 className="">{e.desc}</h5>
          <div className="flex m-auto">
            <button class="bg-transparent hover:bg-black font-semibold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded text-slate-900 active:bg-slate-600">
              Github
            </button>
            <a
              href="#"
              className="mr-4 border-2 border-red-400 max-w-xs"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Aboutme;
