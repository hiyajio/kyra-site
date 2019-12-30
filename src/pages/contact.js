import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="flex">
    <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden">
      <video
        autoplay="true"
        loop="true"
        muted="true"
        className="object-cover bg-auto min-w-full h-full"
      >
        <source
          src={`../../videos/juanaVestBW.webm`}
          alt="Juana Skirt Colored"
          type="video/webm"
        />
      </video>
    </div>
    <div className="flex bg-white font-body h-screen w-1/5 text-gray-700 overflow-visible">
      <img
        src={`../../images/logo.png`}
        alt="Kyra logo"
        className="absolute w-8/12 top-0 right-0"
      ></img>
      <div className="justify-center content-center object-center m-auto">
        <ul>
          <Link to="/">
            <li className="hover:text-white hover:bg-silvered">/home</li>
          </Link>
          <Link to="collections">
            <li className="hover:text-white hover:bg-silvered">/collections</li>
          </Link>
          <a
            href={`../../files/resumeBuenviaje.pdf`}
            rel="noopener noreferrer"
            target="_BLANK"
          >
            <li className="hover:text-white hover:bg-silvered">/resume</li>
          </a>
          <Link to="about">
            <li className="hover:text-white hover:bg-silvered">/about</li>
          </Link>
          <Link to="contact">
            <li className="hover:text-white hover:bg-silvered">/contact</li>
          </Link>
        </ul>
        <div className="block absolute w-full">
          <a
            href="https://instagram.com/kyrainstudio"
            rel="noopener noreferrer"
            target="_BLANK"
            className="hover:opacity-0"
          >
            <img
              src={`../../images/logos/instagram.svg`}
              alt={"Jio Buenviaje on Instagram"}
              aria-label="Instagram"
              className="inline-block h-4 mr-2 opacity-50"
            />
          </a>
          <a
            href="https://linkedin.com/in/kyrabuenviaje"
            rel="noopener noreferrer"
            target="_BLANK"
            className="opacity-50 hover:opacity-0"
          >
            <img
              src={`../../images/logos/linkedin.svg`}
              alt={"Jio Buenviaje on LinkedIn"}
              aria-label="LinkedIn"
              className="inline-block h-4 mr-2"
            />
          </a>
          <a
            href="mailto:kyrabuenviaje@gmail.com"
            rel="noopener noreferrer"
            target="_BLANK"
            className="opacity-50 hover:opacity-0"
          >
            <img
              src={`../../images/logos/email.svg`}
              alt={"Jio Buenviaje on Email"}
              aria-label="Gmail"
              className="inline-block h-4 mr-2"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="flex-1 bg-white font-body h-screen w-2/5">
      <div className="mt-10">
        <form
          action="https://formspree.io/FORM_ID"
          method="POST"
          className="w-full max-w-lg"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-sm mb-2"
                for="grid-first-name"
              >
                /first name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm mb-2"
                for="grid-last-name"
              >
                /last name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm mb-2"
                for="grid-password"
              >
                /email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm mb-2"
                for="grid-password"
              >
                /message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-golden opacity-50 hover:opacity-100 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  </div>
)
