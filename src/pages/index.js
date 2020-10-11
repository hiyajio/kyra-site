import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import HeaderHome from "../components/HeaderHome"

import "../styles/index.css"

const IndexPage = props => {
  return (
    <Layout>
      <div className="flex-1 relative bg-white font-body w-screen opacity-100">
        <div className="absolute inset-0">
          <picture>
            <source
              class="w-screen h-screen object-cover"
              srcset={`../../images/juanaNewHome.webp`}
              type="image/webp"
            />
            <img
              class="w-screen h-screen object-cover"
              src="../../images/juanaNewHome.jpg"
              alt="Juana collection"
            />
          </picture>
        </div>
        <div className="absolute right-0">
          <HeaderHome bgColor="bg-transparent z-50 pr-40" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
