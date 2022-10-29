import React from "react";

function Contacto() {
  return (
    <>
      <hr class="border-personalized-600" />
      <div class="flex flex-row text-white ">
        <div class="lg:min-w-40 m-auto">
          <h1 class="text-3xl text-center">¿Quieres contactarme?</h1>
          <p class="m-auto max-w-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            nulla reiciendis quaerat cum quam perspiciatis praesentium et ad
            quis eius, atque provident quos odit corrupti quia aspernatur
            possimus? Illo, quam.
          </p>
        </div>
        <div>
          <br />
          <br />
          <br />
          <form class="">
            <div class="max-w-xs min-w-56 ">
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
                <input
                  type="text"
                  id="email-address-icon"
                  class=" border-2 border-pink-600  text-sm rounded-lg  focus:border-blue-500 block w-56 pl-10 p-2.5  bg-gray-700  placeholder-gray-400 text-white focus:ring-blue-500 "
                  placeholder="email@example.com"
                />
              </div>
              <br />
              <label
                for="website-admin"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nombre y apellido
              </label>
              <div class="flex w-56">
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
            <div class="hola">
              <label
                for="Su mensaje"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Su mensaje
              </label>
              <textarea
                type="text"
                id="small-input"
                class="block p-2 rounded-lg border  sm:text-xs  focus:border-blue-500 bg-gray-700  border-pink-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500 w-120 h-142"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacto;
