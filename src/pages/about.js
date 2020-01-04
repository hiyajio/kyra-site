import React from "react"

import Header from "../components/Header/index.js"
import Footer from "../components/Footer/index.js"

const AboutPage = props => {
  return (
    <div className="flex">
      <div className="flex bg-white font-body h-screen w-2/5 overflow-hidden">
        <div className="justify-center content-center object-center m-auto text-sm mx-12 mb-12">
          <p className="mb-4">
            Kyra Buenviaje is an undergraduate senior creating her thesis
            collection at the Rhode Island School of Design. She will graduate
            in May 2020 with a degree in BFA Apparel Design. Prior to pursuing
            her fashion education in the US, she studied in both the Philippines
            and Australia on merit scholarships.
          </p>
          <p className="mb-4">
            As a design intern at Zac Posen she was able to assist and
            contribute to the creation of the{" "}
            <a
              href="https://www.vogue.com/fashion-shows/spring-2020-ready-to-wear/zac-posen"
              rel="noopener noreferrer"
              target="_BLANK"
              className="text-golden hover:text-white"
            >
              Spring/Summer 2020 collection
            </a>{" "}
            with Steven Sebring and Winnie Harlow. She also learned extensively
            as a studio intern in Melbourne at{" "}
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
            Competition of 2019 with her take on a{" "}
            <a href="#powersuits" className="text-golden hover:text-white">
              collection of power suits
            </a>{" "}
            collection of power suits for women done through a collaboration
            between Thom Browne and Goldman Sachs. She was also a finalist at
            the 2018 MET Costume Institute College Fashion Design Competition
            for the Heavenly Bodies Exhibit. She exhibited her work at the
            Metropolitan Museum of Art.
          </p>
          <p>
            She’s a womenswear designer who’s favorite undergraduate class was
            menswear tailoring. She believes that women’s figures can be
            joyously celebrated through comfort and space. She drives her
            designs to be constantly rooted in the classics and she jumps into
            them conceptually, tweaking cleverly and thoughtfully. It is her
            goal to keep creating unusual pieces that can be worn excessively
            and worn comfortably at that.
          </p>
        </div>
      </div>
      <Header />
      <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden">
        <picture className="mt-16">
          <source srcset={`../../images/kyra.webp`} type="image/webp" />
          <img src={`../../images/kyra.png`} alt="Kyra headshot" />
        </picture>
      </div>
      <div
        id="powersuits"
        className="overlay inset-0 absolute invisible opacity-0"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          transition: "opacity 200ms",
        }}
      >
        <a className="absolute cursor-default h-full w-full" href="#"></a>
        <div className="rounded border-gray-500 outline-none shadow relative bg-white w-full my-8 p-5 max-w-4xl mx-auto">
          <picture>
            <source srcset={`../../images/powersuits.webp`} type="image/webp" />
            <img src={`../../images/powersuits.png`} alt="Powersuits" />
          </picture>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
