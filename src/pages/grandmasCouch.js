import React from "react"

import Layout from "../components/Layout/index.js"
import HeaderFolio from "../components/HeaderFolio/index.js"
import TopScroll from "../components/TopScroll/index.js"

import "./grandmasCouch.css"

const GrandmasCouchPage = props => {
  return (
    <Layout>
      <TopScroll>
        <div
          className={`flex bg-white font-body h-screen w-2/5 overflow-hidden`}
        ></div>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch1.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch1.png`}
            alt="Grandma's couch 1"
            className="one abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch2.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch2.png`}
            alt="Grandma's couch 2"
            className="two abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch3.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch3.png`}
            alt="Grandma's couch 3"
            className="three abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch4.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch4.png`}
            alt="Grandma's couch 4"
            className="four abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch5.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch5.png`}
            alt="Grandma's couch 5"
            className="five abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch6.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch6.png`}
            alt="Grandma's couch 6"
            className="six abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch7.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch7.png`}
            alt="Grandma's couch 7"
            className="seven abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch8.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch8.png`}
            alt="Grandma's couch 8"
            className="eight abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch9.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch9.png`}
            alt="Grandma's couch 9"
            className="nine abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch10.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch10.png`}
            alt="Grandma's couch 10"
            className="ten abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch11.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch11.png`}
            alt="Grandma's couch 11"
            className="eleven abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch12.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch12.png`}
            alt="Grandma's couch 12"
            className="twelve abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch13.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch13.png`}
            alt="Grandma's couch 13"
            className="thirteen abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch14.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch14.png`}
            alt="Grandma's couch 14"
            className="fourteen abs"
          />
        </picture>
        <HeaderFolio bgColor="bg-transparent z-50" />
        <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden"></div>
      </TopScroll>
    </Layout>
  )
}

export default GrandmasCouchPage
