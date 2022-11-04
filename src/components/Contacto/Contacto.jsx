import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

function Contacto() {
  return (
    <>
      <hr class="border-personalized-600" id="contacto" />
      <br />
      <br />
      <div class="flex md:flex-row xsm:flex-col xsm:m-auto  text-white  select-text">
        <div class="lg:min-w-40 m-auto md:w-96 xl:w-120 ">
          <h1 class="text-3xl text-center">¿Quieres contactarme?</h1>
          <p class="max-w-xl text-center">
            Para contactarme, puedes enviar un correo, comunicarte mediante mis
            redes sociales o contactar a mi número telefónico.
          </p>
          <div class="w-full flex pt-6 m-auto">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              href="https://www.linkedin.com/in/guidosgutierrez/"
              target="_blank"
              className="m-auto rounded-md w-11 hover:text-blue-600 hover:bg-white"
            >
              <BsLinkedin size={45} title="LinkedIn: Guido Gutierrez" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              href="https://wa.me/5492615798302"
              target="_blank "
              className="m-auto w-11 hover:bg-green-500 hover:rounded-full"
            >
              <BsWhatsapp size={45} title="Whatsapp: +54 9 2615798302" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              href="https://github.com/gguidoxx"
              target="_blank "
              className="m-auto w-11 "
            >
              <RiGithubLine size={45} title="Github: gguidoxx" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              href="mailto:gudombe@gmail.com"
              target="_blank "
              className="m-auto w-11"
            >
              <AiOutlineMail size={45} title="Correo: gudombe@gmail.com" />
            </motion.a>
          </div>
        </div>
        <div class="md:w-96 xl:w-120 xsm:w-64 sm:w-72 mr-9 xsm:flex-col xsm:m-auto">
          <br />
          <br />
          <br />
          <form class="">
            <div class="max-w-xs">
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Su e-mail
              </label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div class="flex md:w-96 xl:w-120 xsm:w-64 sm:w-72">
                  <span class="inline-flex items-center px-3 text-sm  rounded-l-md border border-r-0  bg-gray-600 text-gray-600 border-t-pink-600 border-l-pink-600 border-b-pink-600">
                    A..
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    class="rounded-none rounded-r-lg border border-pink-600  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 md:w-56 text-sm p-2.5 bg-gray-700 placeholder-gray-400 text-white  "
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              <br />
              <label
                for="website-admin"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nombre y apellido
              </label>
              <div class="flex md:w-96 xl:w-120 xsm:w-64 sm:w-72">
                <span class="inline-flex items-center px-3 text-sm  rounded-l-md border border-r-0  bg-gray-600 text-gray-400 border-t-pink-600 border-l-pink-600 border-b-pink-600">
                  @
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="rounded-none rounded-r-lg border border-pink-600  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 md:w-56 text-sm p-2.5 bg-gray-700 placeholder-gray-400 text-white  "
                  placeholder="Bonnie Green"
                />
              </div>
            </div>
            <div class="">
              <label
                for="Su mensaje"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Su mensaje
              </label>
              <textarea
                type="text"
                id="website-admin"
                class="block p-2 rounded-lg border  sm:text-xs  focus:border-blue-500 bg-gray-700  border-pink-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500 md:w-96 xl:w-120 xsm:w-64  sm:w-72 h-142"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacto;
