import React from "react"

import Layout from "../components/Layout"
import HeaderVideo from "../components/HeaderVideo"

import "../styles/index.css"

const SupimaPage = props => {
  return (
    <Layout>
      <div className="flex-1 relative bg-white font-body w-screen opacity-100">
        <div className="absolute inset-0">
          <video autoplay="true" loop="true" muted="true" playsinline="true">
            <source
              src={`../../videos/supima.webm`}
              alt="Juana Skirt RGB webm"
              type='video/webm; codecs="vp8, vorbis"'
            />
            <source
              src={`../../videos/supima.mp4`}
              alt="Juana Skirt RGB mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
          </video>
        </div>
        <div className="absolute right-0">
          <HeaderVideo bgColor="bg-transparent z-50 pr-40" />
        </div>
      </div>
    </Layout>
  )
}

export default SupimaPage
