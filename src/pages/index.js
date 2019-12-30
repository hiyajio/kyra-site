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
          src={`../../videos/juanaSkirtRGB.webm`}
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
            <li className="hover:text-white hover:bg-silvered">home</li>
          </Link>
          <Link to="#collections">
            <li className="hover:text-white hover:bg-silvered">collections</li>
          </Link>
          <a
            href={`../../files/resumeBuenviaje.pdf`}
            rel="noopener noreferrer"
            target="_BLANK"
          >
            <li className="hover:text-white hover:bg-silvered">resume</li>
          </a>
          <Link to="#about">
            <li className="hover:text-white hover:bg-silvered">about</li>
          </Link>
          <Link to="#contact">
            <li className="hover:text-white hover:bg-silvered">contact</li>
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
      <video autoplay="true" loop="true" muted="true" className="h-full">
        <source
          src={`../../videos/juanaSkirtBW.webm`}
          alt="Juana Skirt BnW"
          type="video/webm"
        />
      </video>
    </div>
  </div>
)
