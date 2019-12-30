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
          <li className="hover:text-white">
            <Link to="#home">Home</Link>
          </li>
          <li className="hover:text-white">
            <Link to="#collections">Collections</Link>
          </li>
          <li className="hover:text-white">
            <a
              href={`../../files/resumeBuenviaje.pdf`}
              rel="noopener noreferrer"
              target="_BLANK"
            >
              Resume
            </a>
          </li>
          <li className="hover:text-white">
            <Link to="#about">About</Link>
          </li>
          <li className="hover:text-white">
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
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
