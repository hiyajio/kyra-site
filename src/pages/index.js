import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index.js"
import HeaderFolio from "../components/HeaderFolio/index.js"

export default () => (
  <Layout>
    <div className="flex-1 static bg-white font-body h-screen w-2/5 overflow-hidden">
      <Link to="juanaPartOneC">
        <video
          autoplay="true"
          loop="true"
          muted="true"
          playsinline="true"
          className="object-cover bg-auto min-w-full h-full hover:opacity-75"
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
    <HeaderFolio />
    <div className="flex-1 static bg-white font-body h-screen w-2/5 opacity-100 overflow-hidden">
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
    </div>
  </Layout>
)
