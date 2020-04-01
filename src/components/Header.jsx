import React, { useState } from "react"
import { Link } from "gatsby"

import useDocumentScrollThrottled from "./useDocumentScrollThrottled"
import Dropdown from "./Dropdown"

const Header = props => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)

  const TIMEOUT_DELAY = 50

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown)
    }, TIMEOUT_DELAY)
  })

  const hiddenStyle = shouldHideHeader ? "opacity-25" : ""

  return (
    <div className="z-50 bg-transparent font-body h-screen w-1/5 text-gray-700 md:pt-64 lg:pt-64 xl:pt-64 md:mt-16 lg:mt-16 xl:mt-16">
      <picture className={`fixed w-8/12 top-0 right-0 ${hiddenStyle}`}>
        <source srcset={`../../images/logo.webp`} type="image/webp" />
        <img src={`../../images/logo.png`} alt="Kyra logo" />
      </picture>
      <div className="w-2/5 justify-center content-center object-center m-auto pb-32 pr-20">
        <div className={`fixed ${hiddenStyle}`}>
          <Link to="/" aria-label="Home">
            <ul>
              <li className="hover:text-white hover:bg-silvered">/home</li>
            </ul>
          </Link>
          <Dropdown />
          <a
            href={`../../files/resumeBuenviaje.pdf`}
            rel="noopener noreferrer"
            target="_BLANK"
            aria-label="Kyra resume"
          >
            <ul>
              <li className="hover:text-white hover:bg-silvered">/resume</li>
            </ul>
          </a>
          <Link to="about" aria-label="About">
            <ul>
              <li className="hover:text-white hover:bg-silvered">/about</li>
            </ul>
          </Link>
          <Link to="contact" aria-label="Contact">
            <ul>
              <li className="hover:text-white hover:bg-silvered">/contact</li>
            </ul>
          </Link>
          <div className="block">
            <a
              href="https://instagram.com/kyrainstudio"
              rel="noopener noreferrer"
              target="_BLANK"
              className="hover:opacity-0"
              aria-label="Kyra instagram"
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
              aria-label="Kyra linkedin"
            >
              <img
                src={`../../images/logos/linkedin.svg`}
                alt={"Kyra on LinkedIn"}
                aria-label="LinkedIn"
                className="inline-block h-4 mr-2"
              />
            </a>
            <Link
              to="contact"
              className="opacity-50 hover:opacity-0"
              aria-label="Kyra email"
            >
              <img
                src={`../../images/logos/email.svg`}
                alt={"Kyra on Gmail"}
                aria-label="Gmail"
                className="inline-block h-4 mr-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
