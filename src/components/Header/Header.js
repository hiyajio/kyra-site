import React, { useState } from "react"
import { Link } from "gatsby"

import useDocumentScrollThrottled from "./useDocumentScrollThrottled"

import Dropdown from "../Dropdown/index.js"

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

  const bgColor = props.bgColor || "bg-white"
  const headerStyle =
    "flex " +
    bgColor +
    " font-body h-screen w-1/5 text-gray-700 overflow-hidden"

  return (
    <div className={headerStyle}>
      <picture className={`fixed w-8/12 top-0 right-0 ${hiddenStyle}`}>
        <source srcset={`../../images/logo.webp`} type="image/webp" />
        <img src={`../../images/logo.png`} alt="Kyra logo" />
      </picture>
      <div className="w-2/5 justify-center content-center object-center m-auto pb-32 pr-20">
        <div className={`fixed ${hiddenStyle}`}>
          <ul>
            <Link to="/">
              <li className="hover:text-white hover:bg-silvered">/home</li>
            </Link>
            <Dropdown />
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
          <div className="block">
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
            <Link to="contact" className="opacity-50 hover:opacity-0">
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
