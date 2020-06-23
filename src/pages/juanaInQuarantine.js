import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import HeaderFolio from "../components/HeaderFolio"
import TopScroll from "../components/TopScroll"
import Slider from "react-slick"

const PressPage = props => {
  const data = useStaticQuery(graphql`
    query Quarantine {
      image1: file(relativePath: { eq: "thesis/juanaThesis1.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "thesis/juanaThesis2.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "thesis/juanaThesis3.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "thesis/juanaThesis4.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image5: file(relativePath: { eq: "thesis/juanaThesis5.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image6: file(relativePath: { eq: "thesis/juanaThesis6.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image7: file(relativePath: { eq: "thesis/juanaThesis7.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image8: file(relativePath: { eq: "thesis/juanaThesis8.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image9: file(relativePath: { eq: "thesis/juanaThesis9.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Layout>
      <TopScroll>
        <div className="flex-1 h-screen w-4/5">
          <Slider {...settings}>
            <div className="h-auto w-full">
              <Img fluid={data.image1.childImageSharp.fluid} />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image2.childImageSharp.fluid} />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image3.childImageSharp.fluid} />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image4.childImageSharp.fluid} />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image5.childImageSharp.fluid} />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image6.childImageSharp.fluid} />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image7.childImageSharp.fluid} />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image8.childImageSharp.fluid} />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image9.childImageSharp.fluid} />
            </div>
          </Slider>
        </div>
        <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden"></div>
        <HeaderFolio bgColor="bg-transparent z-50" />
      </TopScroll>
    </Layout>
  )
}

export default PressPage
