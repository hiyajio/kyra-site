import React from "react"

import Layout from "../components/Layout/index.js"
import HeaderFolio from "../components/HeaderFolio/index.js"
import TopScroll from "../components/TopScroll/index.js"

import "../styles/juanaPartOne.css"

const JuanaPartOnePage = props => {
  return (
    <Layout>
      <TopScroll>
        <div
          className={`flex bg-white font-body h-screen w-2/5 overflow-hidden`}
        ></div>
        <picture>
          <source
            srcset={`../../images/collections/juanaPartOne/kbJuana1.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana1.png`}
            alt="Juana part one 1"
            className="one-js abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaPartOne/kbJuana2.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana2.png`}
            alt="Juana part one 2"
            className="two-js abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaPartOne/kbJuana3.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana3.png`}
            alt="Juana part one 3"
            className="three-js abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaPartOne/kbJuana4.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana4.png`}
            alt="Juana part one 4"
            className="four-js abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaPartOne/kbJuana5.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana5.png`}
            alt="Juana part one 5"
            className="five-js abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaPartOne/kbJuana6.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana6.png`}
            alt="Juana part one 6"
            className="six-js abs"
          />
        </picture>
        <HeaderFolio bgColor="bg-transparent z-50" />
        <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden"></div>
      </TopScroll>
    </Layout>
  )
}

export default JuanaPartOnePage
