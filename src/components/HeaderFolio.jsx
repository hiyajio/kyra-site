import React, { useState } from "react"
import { Link } from "gatsby"

import useDocumentScrollThrottled from "./useDocumentScrollThrottled"
import Dropdown from "./Dropdown"

const HeaderFolio = props => {
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

  const bgColor = props.bgColor || "bg-white"
  const headerStyle =
    "flex " + bgColor + " font-body h-screen w-1/5 text-gray-700"

  return (
    <div className={headerStyle}>
      <Link to="/" aria-label="Home">
        <picture
          className={`fixed w-9/12 top-0 right-0 z-30 hover:opacity-75 ${hiddenStyle}`}
        >
          <source srcset={`../../images/logo.webp`} type="image/webp" />
          <img src={`../../images/logo.png`} alt="Kyra logo" />
        </picture>
      </Link>
      <div className="text-right w-2/5 justify-center content-center object-center m-auto pb-64 mt-64 pt-4 mr-40 z-10">
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
          <Link to="/press/" aria-label="Press">
            <ul>
              <li className="hover:text-white hover:bg-silvered">/press</li>
            </ul>
          </Link>
          <Link to="/about/" aria-label="About">
            <ul>
              <li className="hover:text-white hover:bg-silvered">/about</li>
            </ul>
          </Link>
          <Link to="/contact/" aria-label="Contact">
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
              to="/contact/"
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

export default HeaderFolio
