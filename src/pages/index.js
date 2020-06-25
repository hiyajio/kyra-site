import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import HeaderFolio from "../components/HeaderFolio"

import "../styles/index.css"

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    query Index {
      image: file(relativePath: { eq: "juanaDressHP.jpg" }) {
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
      <div className="flex-1 static bg-white font-body h-screen w-2/5 overflow-hidden">
        <Link to="juanaPartOne" aria-label="Juana 1 simple">
          <picture className="object-cover hover:opacity-75 bottom-0 ">
            {/* <source
              srcset={`../../images/juanaDressHP.webp`}
              type="image/webp"
            /> */}
            <Img
              fluid={data.image.childImageSharp.fluid}
              alt="Juana homepage"
              className="object-cover bg-auto min-w-full h-full hover:opacity-75"
            />
          </picture>
        </Link>
      </div>
      {/*<div className="flex-1 static bg-white font-body h-screen w-2/5 opacity-100 overflow-hidden">
      <Link to="juanaPartOneC">
        <video
          autoplay="true"
          loop="true"
          muted="true"
          playsinline="true"
          className="h-full hover:opacity-75"
        >
          <source
            src={`../../videos/juanaSkirtRGB.webm`}
            alt="Juana Skirt RGB webm"
            type='video/webm; codecs="vp8, vorbis"'
          />
          <source
            src={`../../videos/juanaSkirtRGB.mp4`}
            alt="Juana Skirt RGB mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>
      </Link>
</div>*/}
      <div className="flex-1 relative bg-white font-body h-screen w-2/5 opacity-100">
        <div className="absolute inset-0">
          <Link to="juanaPartOneC" aria-label="Juana 1 curated">
            <video
              autoplay="true"
              loop="true"
              muted="true"
              playsinline="true"
              className="hover:opacity-75 ind-1 absolute"
            >
              <source
                src={`../../videos/juanaVestBW.webm`}
                alt="Juana Vest BW webm"
                type='video/webm; codecs="vp8, vorbis"'
              />
              <source
                src={`../../videos/juanaVestBW.mp4`}
                alt="Juana Vest BW mp4"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              />
            </video>
          </Link>
        </div>
      </div>
      <HeaderFolio />
    </Layout>
  )
}

export default IndexPage
