import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import HeaderFolio from "../components/HeaderFolio"

const ErrorPage = props => {
  const data = useStaticQuery(graphql`
    query Error {
      image: file(relativePath: { eq: "spaceVeganContact.jpg" }) {
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
      <div className="flex z-10 absolute md:static lg:static xl:static bg-transparent font-body h-screen w-screen md:w-2/5 lg:w-2/5 xl:w-2/5 overflow-hidden">
        <div className="text-white md:text-black lg:text-black xl:text-black justify-center content-center object-center m-auto text-xs lg:text-sm xl:text-sm mx-6 lg:mx-12 lg:mb-12 xl:mx-12 xl:mb-12">
          <div className="opacity-50 md:opacity-100 lg:opacity-100 xl:opacity-100 bg-silvered md:bg-transparent lg:bg-transparent xl:bg-transparent">
            <p className="mb-4 opacity-100">404</p>
          </div>
        </div>
      </div>
      <div className="flex-1 absolute md:static lg:static xl:static bg-transparent md:bg-white lg:bg-white xl:bg-white font-body h-screen w-screen md:w-2/5 lg:w-2/5 xl:w-2/5 overflow-hidden">
        <div className="absolute bottom-0 mb-8 w-screen lg:w-2/5 xl:w-2/5"></div>
      </div>
      <div className="flex-1 absolute md:static lg:static xl:static bg-white font-body h-screen w-screen md:w-2/5 lg:w-2/5 xl:w-2/5 overflow-hidden">
        <Link to="/spaceVegan/" aria-label="Space vegan">
          <picture className="object-cover bg-auto min-w-full h-full">
            {/* <source
              srcset={`../../images/spaceVeganContact.webp`}
              type="image/webp"
            /> */}
            <Img
              fluid={data.image.childImageSharp.fluid}
              alt="Space vegan contact"
              className="object-cover bg-auto min-w-full h-full hover:opacity-75"
            />
          </picture>
        </Link>
      </div>
      <HeaderFolio />
    </Layout>
  )
}

export default ErrorPage
