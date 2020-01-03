import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="flex">
    <div className="flex bg-white font-body h-screen w-2/5 overflow-hidden"></div>
    <picture>
      <source
        srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch1.webp`}
        type="image/webp"
      />
      <img
        src={`../../images/collections/grandmasCouch/kbGrandmasCouch1.png`}
        alt="Grandma's couch 1"
        style={{
          position: "absolute",
          height: "40rem",
          left: "16rem",
          top: "6rem",
        }}
      />
    </picture>
    <picture>
      <source
        srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch2.webp`}
        type="image/webp"
      />
      <img
        src={`../../images/collections/grandmasCouch/kbGrandmasCouch2.png`}
        alt="Grandma's couch 2"
        style={{
          position: "absolute",
          height: "36rem",
          left: "44rem",
          top: "18rem",
        }}
      />
    </picture>
    <picture>
      <source
        srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch3.webp`}
        type="image/webp"
      />
      <img
        src={`../../images/collections/grandmasCouch/kbGrandmasCouch3.png`}
        alt="Grandma's couch 3"
        style={{
          position: "absolute",
          height: "32rem",
          left: "3rem",
          top: "38rem",
        }}
      />
    </picture>
    <picture>
      <source
        srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch4.webp`}
        type="image/webp"
      />
      <img
        src={`../../images/collections/grandmasCouch/kbGrandmasCouch4.png`}
        alt="Grandma's couch 4"
        style={{
          position: "absolute",
          height: "40rem",
          left: "58rem",
          top: "62rem",
        }}
      />
    </picture>
    <picture>
      <source
        srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch5.webp`}
        type="image/webp"
      />
      <img
        src={`../../images/collections/grandmasCouch/kbGrandmasCouch5.png`}
        alt="Grandma's couch 5"
        style={{
          position: "absolute",
          height: "32rem",
          left: "38rem",
          top: "88rem",
        }}
      />
    </picture>
    <picture>
      <source
        srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch6.webp`}
        type="image/webp"
      />
      <img
        src={`../../images/collections/grandmasCouch/kbGrandmasCouch6.png`}
        alt="Grandma's couch 6"
        style={{
          position: "absolute",
          height: "36rem",
          left: "12rem",
          top: "100rem",
        }}
      />
    </picture>
    <div className="flex bg-transparent font-body h-screen w-1/5 text-gray-700 overflow-hidden z-50">
      <picture className="absolute w-8/12 top-0 right-0">
        <source srcset={`../../images/logo.webp`} type="image/webp" />
        <img src={`../../images/logo.png`} alt="Kyra logo" />
      </picture>
      <div className="justify-center content-center object-center m-auto">
        <ul>
          <Link to="/">
            <li className="hover:text-white hover:bg-silvered">/home</li>
          </Link>
          <Link to="collections">
            <li className="hover:text-white hover:bg-silvered">/collections</li>
          </Link>
          <nav>
            <Link to="collections">
              <li className="hover:text-white hover:bg-silvered">
                juana part 1 - curated
              </li>
            </Link>
            <Link to="collections">
              <li className="hover:text-white hover:bg-silvered">
                juana part 1
              </li>
            </Link>
            <Link to="collections">
              <li className="hover:text-white hover:bg-silvered">hold</li>
            </Link>
            <Link to="collections">
              <li className="hover:text-white hover:bg-silvered">
                space vegan
              </li>
            </Link>
            <Link to="collections">
              <li className="hover:text-white hover:bg-silvered">
                grandma's couch
              </li>
            </Link>
          </nav>
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
    <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden"></div>
    <div className="absolute bottom-0 right-0 mb-1 mr-1 text-golden font-body text-xs">
      <p>
        made by{" "}
        <a
          href="https://jbuenviaje.com/"
          rel="noopener noreferrer"
          target="_BLANK"
          className="hover:text-white hover:bg-silvered"
        >
          jio buenviaje
        </a>
      </p>
    </div>
  </div>
)
