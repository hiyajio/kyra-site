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
      image10: file(relativePath: { eq: "thesis/juanaThesis10.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image11: file(relativePath: { eq: "thesis/juanaThesis11.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image12: file(relativePath: { eq: "thesis/juanaThesis12.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image13: file(relativePath: { eq: "thesis/juanaThesis13.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image14: file(relativePath: { eq: "thesis/juanaThesis14.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image15: file(relativePath: { eq: "thesis/juanaThesis15.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image16: file(relativePath: { eq: "thesis/juanaThesis16.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image17: file(relativePath: { eq: "thesis/juanaThesis17.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image18: file(relativePath: { eq: "thesis/juanaThesis18.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image19: file(relativePath: { eq: "thesis/juanaThesis19.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1992) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image20: file(relativePath: { eq: "thesis/juanaThesis20.jpg" }) {
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
    arrows: true,
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
              <Img
                fluid={data.image1.childImageSharp.fluid}
                alt="Juana thesis 1"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image2.childImageSharp.fluid}
                alt="Juana thesis 2"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image3.childImageSharp.fluid}
                alt="Juana thesis 3"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image4.childImageSharp.fluid}
                alt="Juana thesis 4"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image5.childImageSharp.fluid}
                alt="Juana thesis 5"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image6.childImageSharp.fluid}
                alt="Juana thesis 6"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image7.childImageSharp.fluid}
                alt="Juana thesis 7"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image8.childImageSharp.fluid}
                alt="Juana thesis 8"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image9.childImageSharp.fluid}
                alt="Juana thesis 9"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image10.childImageSharp.fluid}
                alt="Juana thesis 10"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image11.childImageSharp.fluid}
                alt="Juana thesis 11"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image12.childImageSharp.fluid}
                alt="Juana thesis 12"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image13.childImageSharp.fluid}
                alt="Juana thesis 13"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image14.childImageSharp.fluid}
                alt="Juana thesis 14"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image15.childImageSharp.fluid}
                alt="Juana thesis 15"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image16.childImageSharp.fluid}
                alt="Juana thesis 16"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image17.childImageSharp.fluid}
                alt="Juana thesis 17"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image18.childImageSharp.fluid}
                alt="Juana thesis 18"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image19.childImageSharp.fluid}
                alt="Juana thesis 19"
              />
            </div>
            <div className="h-auto w-full">
              <Img
                fluid={data.image20.childImageSharp.fluid}
                alt="Juana thesis 20"
              />
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
