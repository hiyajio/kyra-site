import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import HeaderFolio from "../components/HeaderFolio"
import Modal from "../components/Modal"

const AboutPage = props => {
  const data = useStaticQuery(graphql`
    query About {
      image: file(relativePath: { eq: "kyra.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="flex static bg-transparent font-body h-screen w-2/5">
        <div className="text-black justify-center content-center object-center m-auto text-xs lg:text-sm xl:text-sm mx-1 sm:mx-2 md:mx-6 lg:mx-12 lg:mb-12 xl:mx-12 xl:mb-12">
          <div className="opacity-100 bg-transparent">
            <p className="mb-4 opacity-100">
              Kyra Buenviaje is a born and raised Filipino who graduated with a BFA in Apparel Design from the Rhode Island School of Design in May 2020. Prior to pursuing her fashion education in the US, she studied in both the Philippines and Australia on merit scholarships.
            </p>
            <p className="mb-4 opacity-100">
              She debuted in NYFW last September 2020 as a finalist for the Supima competition with a collection that was inspired by the feeling of isolation during the pandemic. Her thesis collection on her FIlipino heritage and culture as a 21st century Filipino was made fully out of upcycled and deadstock denim. It gained features on Vogue, Paper, WWD and CFDA.
            </p>
            {/*<p className="mb-4 opacity-100">
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
  </p>*/}
            {/*<p className="mb-4 opacity-100">
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
              for the Heavenly Bodies Exhibit. Currently, she’s competing as the
              representative of RISD at the Supima Design Competition where she
              will showcase 5 looks at New York Fashion Week.
</p>*/}
            <p className="mb-4 opacity-100">
              It was a menswear tailoring class that showed her who she wants to be as a womenswear designer. Ease, quality and concept are the pillars of her art. It is her goal to keep creating unusual pieces that can be worn excessively, and comfortably at that.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 static bg-white font-body h-screen w-2/5 overflow-hidden z-20">
        <picture className="object-cover h-full max-w-full">
          {/* <source srcset={`../../images/kyra.webp`} type="image/webp" /> */}
          <Img
            fluid={data.image.childImageSharp.fluid}
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
      <HeaderFolio />
    </Layout>
  )
}

export default AboutPage
