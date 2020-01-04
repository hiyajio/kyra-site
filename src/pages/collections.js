import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="flex">
    <div className="flex bg-white font-body h-screen w-1/4 overflow-hidden">
      <picture className="object-cover bg-auto min-w-full h-full">
        <source
          srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch1.webp`}
          type="image/webp"
        />
        <img
          src={`../../images/collections/grandmasCouch/kbGrandmasCouch1.png`}
          alt="Space vegan contact"
          className="object-cover bg-auto min-w-full h-full"
        />
      </picture>
    </div>
    <div className="flex bg-white font-body h-screen w-1/4 overflow-hidden">
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
    <div className="flex bg-white font-body h-screen w-1/4 overflow-hidden">
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
    <div className="flex bg-white font-body h-screen w-1/4 overflow-hidden">
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
    <div className="absolute bottom-0 right-0 mb-1 mr-1 text-silvered font-body text-xs opacity-25">
      <p>&copy; 2020 Kyra Buenviaje. All rights reserved.</p>
    </div>
  </div>
)
