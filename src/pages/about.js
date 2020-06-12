import React from "react"

import Layout from "../components/Layout"
import HeaderFolio from "../components/HeaderFolio"
import Modal from "../components/Modal"

const AboutPage = props => {
  return (
    <Layout>
      <div className="flex static bg-transparent font-body h-screen w-2/5">
        <div className="text-black justify-center content-center object-center m-auto text-xs lg:text-sm xl:text-sm mx-1 sm:mx-2 md:mx-6 lg:mx-12 lg:mb-12 xl:mx-12 xl:mb-12">
          <div className="opacity-100 bg-transparent">
            <p className="mb-4 opacity-100">
              Kyra Buenviaje is an undergraduate senior creating her thesis
              collection at the Rhode Island School of Design. She will graduate
              in May 2020 with a degree in BFA Apparel Design. Prior to pursuing
              her fashion education in the US, she studied in both the
              Philippines and Australia on merit scholarships.
            </p>
            <p className="mb-4 opacity-100">
              As a design intern at Zac Posen she was able to assist and
              contribute to the creation of the{" "}
              <a
                href="https://www.vogue.com/fashion-shows/spring-2020-ready-to-wear/zac-posen"
                rel="noopener noreferrer"
                target="_BLANK"
                className="text-golden hover:text-white"
                aria-label="Vogue link"
              >
                Spring/Summer 2020 collection
              </a>{" "}
              with Steven Sebring and Winnie Harlow. She also learned
              extensively as a studio intern in Melbourne at{" "}
              <a
                href="http://luihon.com/"
                rel="noopener noreferrer"
                target="_BLANK"
                className="text-golden hover:text-white"
                aria-label="Lui Hon link"
              >
                Lui Hon
              </a>
              .
            </p>
            <p className="mb-4 opacity-100">
              She recently won the YMA Fashion Scholarship Fund Case Study
              Competition of 2019 with her take on a{" "}
              <a
                href="#powersuits"
                className="text-golden hover:text-white"
                aria-label="YMA power suits"
              >
                collection of power suits
              </a>{" "}
              collection of power suits for women done through a collaboration
              between Thom Browne and Goldman Sachs. She was also a finalist at
              the 2018 MET Costume Institute College Fashion Design Competition
              for the Heavenly Bodies Exhibit. She exhibited her work at the
              Metropolitan Museum of Art.
            </p>
            <p className="mb-4 opacity-100">
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
      </div>
      <HeaderFolio />
      <div className="flex-1 fixed top-0 right-0 bg-white font-body h-screen w-2/5 overflow-hidden">
        <picture className="object-cover h-full max-w-full">
          <source srcset={`../../images/kyra.webp`} type="image/webp" />
          <img
            src={`../../images/kyra.jpg`}
            alt="Kyra headshot"
            className="object-cover w-full h-auto"
          />
        </picture>
      </div>
      <Modal
        linkedTo="powersuits"
        modalImg={`../../images/powersuits.webp`}
        modalAlt={`../../images/powersuits.jpg`}
        modalImgAlt="Powersuits"
      />
    </Layout>
  )
}

export default AboutPage
