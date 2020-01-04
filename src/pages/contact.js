import React from "react"

import Header from "../components/Header/index.js"
import Footer from "../components/Footer/index.js"

export default () => (
  <div className="flex">
    <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden">
      <picture className="object-cover bg-auto min-w-full h-full">
        <source
          srcset={`../../images/spaceVeganContactBW.webp`}
          type="image/webp"
        />
        <img
          src={`../../images/spaceVeganContactBW.png`}
          alt="Space vegan contact"
          className="object-cover bg-auto min-w-full h-full"
        />
      </picture>
    </div>
    <Header />
    <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden">
      <div className="absolute bottom-0 mb-8 w-full">
        <form
          action="https://formspree.io/xrgeoooy"
          method="POST"
          className="w-full max-w-lg"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor="name"
                className="block tracking-wide text-gray-700 text-sm mb-2"
                for="grid-name"
              >
                /name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-silvered border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-name"
                type="text"
                name="name"
                minlength="2"
                required="true"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor="email"
                className="block tracking-wide text-gray-700 text-sm mb-2"
                for="grid-password"
              >
                /email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-silvered border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                name="_replyto"
                minlength="2"
                required="true"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor="message"
                className="block tracking-wide text-gray-700 text-sm mb-2"
                for="grid-password"
              >
                /message
              </label>
              <textarea
                className="no-resize appearance-none block w-full bg-gray-200 text-silvered border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="message"
                minlength="2"
                required="true"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-golden opacity-50 hover:opacity-100 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
)
