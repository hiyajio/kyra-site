import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import HeaderFolio from "../components/HeaderFolio"
import TopScroll from "../components/TopScroll"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/carousel.css"

const PressPage = props => {
  const data = useStaticQuery(graphql`
    query Press {
      image1: file(relativePath: { eq: "press/press1.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "press/press2.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "press/press3.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "press/press4.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image5: file(relativePath: { eq: "press/press5.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image6: file(relativePath: { eq: "press/press6.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image7: file(relativePath: { eq: "press/press7.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image8: file(relativePath: { eq: "press/press8.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image9: file(relativePath: { eq: "press/press9.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  /* function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    )
  } */

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3500,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    /* nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, */
  }

  return (
    <Layout>
      <TopScroll>
        <div className="flex-1 h-screen w-4/5">
          <Slider {...settings}>
            <div className="h-auto w-full">
              <Img fluid={data.image1.childImageSharp.fluid} alt="Press 1" />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image2.childImageSharp.fluid} alt="Press 2" />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image3.childImageSharp.fluid} alt="Press 3" />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image4.childImageSharp.fluid} alt="Press 4" />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image5.childImageSharp.fluid} alt="Press 5" />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image6.childImageSharp.fluid} alt="Press 6" />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image7.childImageSharp.fluid} alt="Press 7" />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image8.childImageSharp.fluid} alt="Press 8" />
            </div>
            <div className="h-auto w-full">
              <Img fluid={data.image9.childImageSharp.fluid} alt="Press 9" />
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
