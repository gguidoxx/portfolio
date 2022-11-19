import React from "react";
import useScrollBlock from "./ScrollHook";
export default function Modal({ content, title, tecnologies, desc, video }) {
  const [showModal, setShowModal] = React.useState(false);

  const [blockScroll, allowScroll] = useScrollBlock();

  const handleOpen = () => {
    setShowModal(true);
    blockScroll();
  };

  const handleClose = () => {
    allowScroll();
    setShowModal(false);
  };

  return (
    <>
      <button
        className="px-6 py-2 mb-1 mr-1 font-semibold text-white bg-pink-500 rounded shadow outline-none hover:bg-pink-700 h-42px hover:shadow-lg focus:outline-none max-h-42px"
        type="button"
        onClick={() => handleOpen()}
      >
        Ver más
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-40 flex items-center justify-center overflow-x-hidden outline-none xsm:pt-80 md:pt-0 focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6 bg-black bg-opacity-25">
              {/*content*/}
              <div className="flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none relativeflex focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                    onClick={() => handleClose()}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-95 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <h3 className="text-2xl font-semibold">¿De qué trata?</h3>
                  <p className="my-4 text-lg leading-relaxed text-slate-500 ">
                    {desc}
                  </p>
                  <h3 className="text-2xl font-semibold">
                    Despliegue de aplicación:{" "}
                  </h3>

                  <p className="my-4 text-lg leading-relaxed text-slate-500 ">
                    {content}
                  </p>
                  <h3 className="text-2xl font-semibold">
                    Tecnologías y herramientas utilizadas:{" "}
                  </h3>
                  <p className="my-4 text-lg leading-relaxed text-slate-500 ">
                    {tecnologies}
                  </p>
                  {video != null ? (
                    <>
                      <h3 className="text-2xl font-semibold">Video</h3>
                      <a href={video} target="_blank">
                        Link a Youtube
                      </a>
                    </>
                  ) : null}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-1 border-t border-solid rounded-b border-slate-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => handleClose()}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-30 overflow-hidden bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
/* This example requires Tailwind CSS v2.0+ */
