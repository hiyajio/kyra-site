import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="flex">
    <div className="flex bg-white font-body h-screen w-2/5 overflow-hidden">
      <div className="justify-center content-center object-center m-auto text-sm mx-12 mb-12">
        <p className="mb-4">
          Kyra Buenviaje is an undergraduate senior creating her thesis
          collection at the Rhode Island School of Design. She will graduate in
          May 2020 with a degree in BFA Apparel Design. Prior to pursuing her
          fashion education in the US, she studied in both the Philippines and
          Australia on merit scholarships.
        </p>
        <p className="mb-4">
          As a design intern at Zac Posen she was able to assist and contribute
          to the creation of the{" "}
          <a
            href="https://www.vogue.com/fashion-shows/spring-2020-ready-to-wear/zac-posen"
            rel="noopener noreferrer"
            target="_BLANK"
            className="text-golden hover:text-white"
          >
            Spring/Summer 2020 collection
          </a>{" "}
          with Steven Sebring and Winnie Harlow. She also learned extensively as
          a studio intern in Melbourne at{" "}
          <a
            href="http://luihon.com/"
            rel="noopener noreferrer"
            target="_BLANK"
            className="text-golden hover:text-white"
          >
            Lui Hon
          </a>
          .
        </p>
        <p className="mb-4">
          She recently won the YMA Fashion Scholarship Fund Case Study
          Competition of 2019 with her take on a collection of power suits for
          women done through a collaboration between Thom Browne and Goldman
          Sachs. She was also a finalist at the 2018 MET Costume Institute
          College Fashion Design Competition for the Heavenly Bodies Exhibit.
          She exhibited her work at the Metropolitan Museum of Art.
        </p>
        <p>
          She’s a womenswear designer who’s favorite undergraduate class was
          menswear tailoring. She believes that women’s figures can be joyously
          celebrated through comfort and space. She drives her designs to be
          constantly rooted in the classics and she jumps into them
          conceptually, tweaking cleverly and thoughtfully. It is her goal to
          keep creating unusual pieces that can be worn excessively and worn
          comfortably at that.
        </p>
      </div>
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
    <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden">
      <picture className="mt-16">
        <source srcset={`../../images/kyra.webp`} type="image/webp" />
        <img src={`../../images/kyra.png`} alt="Kyra headshot" />
      </picture>
    </div>
  </div>
)
