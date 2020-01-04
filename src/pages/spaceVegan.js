import React from "react"

import Header from "../components/Header/index.js"
import Footer from "../components/Footer/index.js"

export default () => (
  <div className="flex">
    <div className="flex bg-white font-body h-screen w-2/5 overflow-hidden"></div>
    <picture>
      <source
        srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch1.webp`}
        type="image/webp"
      />
      <img
        src={`../../images/collections/grandmasCouch/kbGrandmasCouch1.png`}
        alt="Grandma's couch 1"
        style={{
          position: "absolute",
          height: "40rem",
          left: "16rem",
          top: "6rem",
        }}
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
        style={{
          position: "absolute",
          height: "36rem",
          left: "44rem",
          top: "18rem",
        }}
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
        style={{
          position: "absolute",
          height: "32rem",
          left: "3rem",
          top: "38rem",
        }}
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
        style={{
          position: "absolute",
          height: "40rem",
          left: "58rem",
          top: "62rem",
        }}
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
        style={{
          position: "absolute",
          height: "32rem",
          left: "38rem",
          top: "88rem",
        }}
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
        style={{
          position: "absolute",
          height: "36rem",
          left: "12rem",
          top: "100rem",
        }}
      />
    </picture>
    <Header bgColor="bg-transparent z-50" />
    <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden"></div>
    <Footer />
  </div>
)
