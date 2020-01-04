import React from "react"
import { Link } from "gatsby"

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
    <div className="flex bg-white font-body h-screen w-1/5 text-gray-700 overflow-hidden">
      <picture className="absolute w-8/12 top-0 right-0">
        <source srcset={`../../images/logo.webp`} type="image/webp" />
        <img src={`../../images/logo.png`} alt="Kyra logo" />
      </picture>
      <div className="justify-center content-center object-center m-auto">
        <ul>
          <Link to="/">
            <li className="hover:text-white hover:bg-silvered">/home</li>
          </Link>
          <div className="dropdown">
            <Link to="collections">
              <li className="hover:text-white hover:bg-silvered">
                /collections
              </li>
            </Link>
            <div className="dropdown-content">
              <Link to="juanaPartOneC">
                <li className="hover:text-white hover:bg-silvered">
                  juana part 1 - curated
                </li>
              </Link>
              <Link to="juanaPartOne">
                <li className="hover:text-white hover:bg-silvered">
                  juana part 1
                </li>
              </Link>
              <Link to="hold">
                <li className="hover:text-white hover:bg-silvered">hold</li>
              </Link>
              <Link to="spaceVegan">
                <li className="hover:text-white hover:bg-silvered">
                  space vegan
                </li>
              </Link>
              <Link to="grandmasCouch">
                <li className="hover:text-white hover:bg-silvered">
                  grandma's couch
                </li>
              </Link>
            </div>
          </div>
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
              alt={"Kyra on Instagram"}
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
              alt={"Kyra on LinkedIn"}
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
              alt={"Kyra on Gmail"}
              aria-label="Gmail"
              className="inline-block h-4 mr-2"
            />
          </a>
        </div>
      </div>
    </div>
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
    <div className="absolute bottom-0 right-0 mb-1 mr-1 text-silvered font-body text-xs opacity-25">
      <p>&copy; 2020 Kyra Buenviaje. All rights reserved.</p>
    </div>
  </div>
)
