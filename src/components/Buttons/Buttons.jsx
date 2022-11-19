import React from "react";
import ModalCards from "../ModalCards/ModalCards";
import { RiGithubLine } from "react-icons/ri";

function Buttons({
  linkGit,
  linkLive,
  title,
  content,
  tecnologies,
  desc,
  video,
}) {
  return (
    <div className="flex justify-center gap-2 select-none">
      <a href={linkGit} target="_blank" rel="noreferrer">
        <button class="bg-slate-900 hover:bg-black font-semibold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded active:bg-slate-600 text-white">
          <RiGithubLine size={24} />
        </button>
      </a>

      <a href={linkLive} target="_blank" rel="noreferrer">
        <button class="bg-green-600 font-semibold text-white py-2 px-4 border border-slate-900 border-transparent rounded hover:bg-green-900">
          Página web
        </button>
      </a>
      <a target="_blank" rel="noreferrer" className="">
        <ModalCards
          title={title}
          content={content}
          tecnologies={tecnologies}
          desc={desc}
          video={video}
        />
      </a>
    </div>
  );
}

export default Buttons;
