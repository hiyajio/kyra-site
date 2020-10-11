import React from "react"

import Layout from "../components/Layout"
import HeaderFolio from "../components/HeaderFolio"
import TopScroll from "../components/TopScroll"

import "../styles/juanaCollab.css"

const JuanaCollabPage = props => {
  return (
    <Layout>
      <TopScroll>
        <div
          className={`flex bg-white font-body h-screen w-2/5 overflow-hidden`}
        ></div>
        <picture>
          <source
            srcset={`../../images/collections/juanaCollab/CJuana1.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaCollab/CJuana1.jpg`}
            alt="Juana collab 1"
            className="one-jco abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaCollab/CJuana2.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaCollab/CJuana2.jpg`}
            alt="Juana collab 2"
            className="two-jco abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaCollab/CJuana3.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaCollab/CJuana3.jpg`}
            alt="Juana collab 3"
            className="three-jco abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaCollab/CJuana4.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaCollab/CJuana4.jpg`}
            alt="Juana collab 4"
            className="four-jco abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaCollab/CJuana5.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaCollab/CJuana5.jpg`}
            alt="Juana collab 5"
            className="five-jco abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaCollab/CJuana6.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaCollab/CJuana6.jpg`}
            alt="Juana collab 6"
            className="six-jco abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaCollab/CJuana7.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaCollab/CJuana7.jpg`}
            alt="Juana collab 7"
            className="seven-jco abs"
          />
        </picture>
        <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden"></div>
        <HeaderFolio bgColor="bg-transparent z-50" />
      </TopScroll>
    </Layout>
  )
}

export default JuanaCollabPage
