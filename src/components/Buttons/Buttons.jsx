import React from "react";

function Buttons({ linkGit, linkLive }) {
  return (
    <div className="flex ml-1 pb-1 mt-1 m-auto  gap-1 pt-9 select-text">
      <a href={linkGit} target="_blank" rel="noreferrer">
        <button class="bg-slate-900 hover:bg-black font-semibold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded active:bg-slate-600 text-white">
          Proyecto Github
        </button>
      </a>

      <a href={linkLive} target="_blank" rel="noreferrer">
        <button class="bg-green-600 font-semibold text-white py-2 px-4 border border-slate-900 border-transparent rounded hover:bg-green-900">
          Página web
        </button>
      </a>
    </div>
  );
}

export default Buttons;
